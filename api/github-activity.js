export const GITHUB_ACTIVITY_PATH = "/api/github-activity";

const USERNAME = "Armando-Schoenstatt";
const PROFILE_URL = `https://github.com/${USERNAME}?tab=repositories`;
const CONTRIBUTIONS_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;
const TIMEOUT_MS = 15_000;
const CACHE_CONTROL = "public, max-age=60, s-maxage=300, stale-while-revalidate=600";

function respond(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", CACHE_CONTROL);
  res.end(JSON.stringify(body));
}

function textFromHtml(value) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function parseRepositories(html) {
  const items = [...html.matchAll(/<li\b(?=[^>]*\bitemprop=["']owns["'])[^>]*>([\s\S]*?)<\/li>/gi)];
  const repositories = [];
  const seen = new Set();

  for (const [, item] of items) {
    const anchors = [...item.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)];
    const repositoryAnchor = anchors.find(([, attributes]) =>
      /\bitemprop=["']name codeRepository["']/i.test(attributes)
    );
    if (!repositoryAnchor) continue;

    const href = repositoryAnchor[1].match(/\bhref=["']([^"']+)["']/i)?.[1];
    const name = textFromHtml(repositoryAnchor[2]);
    if (!href || !name || seen.has(name)) continue;
    seen.add(name);

    repositories.push({
      name,
      html_url: `https://github.com${href}`,
      language: textFromHtml(item.match(/\bitemprop=["']programmingLanguage["'][^>]*>([\s\S]*?)<\/span>/i)?.[1] ?? "") || null,
      updated_at: item.match(/<relative-time\b[^>]*\bdatetime=["']([^"']+)["']/i)?.[1] ?? null,
    });
  }

  return repositories;
}

async function fetchUpstream(url, accept) {
  const response = await fetch(url, {
    headers: {
      Accept: accept,
      "User-Agent": "Armando-Portfolio",
    },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`O serviço público respondeu com o erro ${response.status}.`);
  }

  return response;
}

export async function handleGitHubActivity(req, res) {
  if (req.method && req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return respond(res, 405, { error: "Method not allowed." });
  }

  try {
    const [contributionResponse, profileResponse] = await Promise.all([
      fetchUpstream(CONTRIBUTIONS_URL, "application/json"),
      fetchUpstream(PROFILE_URL, "text/html"),
    ]);

    const [contributionData, profileHtml] = await Promise.all([
      contributionResponse.json(),
      profileResponse.text(),
    ]);

    const contributions = contributionData.contributions?.slice(-365);
    if (!Array.isArray(contributions) || contributions.length === 0) {
      throw new Error("O serviço de contribuições retornou dados em um formato inesperado.");
    }

    const repositories = parseRepositories(profileHtml);
    if (repositories.length === 0) {
      throw new Error("Não foi possível encontrar repositórios públicos no perfil do GitHub.");
    }

    return respond(res, 200, {
      contributions,
      publicRepositories: repositories.length,
      repositories: repositories.slice(0, 4),
    });
  } catch (error) {
    return respond(res, 502, {
      error: `Não foi possível carregar os dados públicos do GitHub: ${error.message}`,
    });
  }
}

export default function handler(req, res) {
  return handleGitHubActivity(req, res);
}
