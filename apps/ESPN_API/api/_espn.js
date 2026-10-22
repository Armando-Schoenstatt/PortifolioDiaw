export const ESPN_PATH = "/api/espn";

const ESPN_ORIGIN = "https://site.api.espn.com";
const ALLOWED_PATHS = [
  /^\/apis\/site\/v2\/sports\/soccer\/[a-z0-9.]+\/teams$/,
  /^\/apis\/site\/v2\/sports\/soccer\/all\/teams\/\d+\/schedule$/,
  /^\/apis\/v2\/sports\/soccer\/[a-z0-9.]+\/standings$/,
  /^\/apis\/site\/v2\/sports\/basketball\/nba\/teams$/,
  /^\/apis\/site\/v2\/sports\/basketball\/nba\/scoreboard$/,
  /^\/apis\/site\/v2\/sports\/basketball\/nba\/teams\/[a-z]{2,3}\/schedule$/,
  /^\/apis\/v2\/sports\/basketball\/nba\/standings$/,
];
const QUERY_VALUES = {
  fixture: /^(true|false)$/,
  dates: /^\d{8}$/,
  seasontype: /^\d$/,
};
const CACHE_CONTROL = "public, max-age=60, s-maxage=60, stale-while-revalidate=300";

function send(res, status, body, cache = "no-store") {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", cache);
  res.end(JSON.stringify(body));
}

function parseRequest(req) {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const paths = url.searchParams.getAll("path");
  if (paths.length !== 1 || !ALLOWED_PATHS.some((pattern) => pattern.test(paths[0]))) {
    return null;
  }

  const upstream = new URL(paths[0], ESPN_ORIGIN);
  for (const [key, value] of url.searchParams) {
    if (key === "path") continue;
    if (!QUERY_VALUES[key] || !QUERY_VALUES[key].test(value) || upstream.searchParams.has(key)) {
      return null;
    }
    upstream.searchParams.set(key, value);
  }

  return upstream;
}

export async function handleEspn(req, res) {
  if (req.method !== "GET") {
    return send(res, 405, { error: "method_not_allowed", message: "Use uma requisição GET." });
  }

  const upstreamUrl = parseRequest(req);
  if (!upstreamUrl) {
    return send(res, 400, { error: "invalid_request", message: "Consulta da ESPN inválida." });
  }

  let response;
  try {
    response = await fetch(upstreamUrl, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(15_000),
    });
  } catch {
    return send(res, 502, {
      error: "espn_unavailable",
      message: "Não foi possível conectar à API da ESPN.",
    });
  }

  if (!response.ok) {
    return send(res, response.status, {
      error: "espn_upstream",
      message: `A ESPN respondeu ${response.status}.`,
    });
  }

  let data;
  try {
    data = await response.json();
  } catch {
    return send(res, 502, {
      error: "invalid_upstream_response",
      message: "A resposta da ESPN não contém JSON válido.",
    });
  }

  return send(res, 200, data, CACHE_CONTROL);
}
