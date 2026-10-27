export const COMMITS_PATH = "/api/commits";

const FEED_URL = "https://github.com/Armando-Schoenstatt.atom";
const FEED_TIMEOUT_MS = 10_000;
const CACHE_CONTROL = "public, max-age=60, s-maxage=300, stale-while-revalidate=600";

function decodeEntities(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function stripMarkup(value) {
  return decodeEntities(value.replace(/<[^>]*>/g, ""))
    .replace(/\s+/g, " ")
    .trim();
}

function parseCommitEntries(feed) {
  const entries = [...feed.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/gi)];
  const commits = new Map();

  for (const [, entry] of entries) {
    const title = stripMarkup(entry.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
    if (!title.includes(" pushed ")) continue;

    const updated = stripMarkup(entry.match(/<updated\b[^>]*>([\s\S]*?)<\/updated>/i)?.[1] ?? "");
    const html = decodeEntities(entry.match(/<content\b[^>]*>([\s\S]*?)<\/content>/i)?.[1] ?? "");
    const listItems = html.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi);

    for (const [, item] of listItems) {
      const link = item.match(/<a\b[^>]*href=["']([^"']*\/commit\/([0-9a-f]{7,40}))["'][^>]*>/i);
      if (!link) continue;

      const [, path, sha] = link;
      if (commits.has(sha)) continue;

      const message = stripMarkup(item.match(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/i)?.[1] ?? "");
      const repository = path.match(/^\/([^/]+\/[^/]+)\/commit\//i)?.[1];
      if (!repository || !message) continue;

      commits.set(sha, {
        sha,
        message: message.split(/\r?\n/, 1)[0],
        date: updated,
        repository,
        url: `https://github.com${path}`,
      });

      if (commits.size === 8) return [...commits.values()];
    }
  }

  return [...commits.values()];
}

function respond(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", CACHE_CONTROL);
  res.end(JSON.stringify(body));
}

export async function handleCommits(req, res) {
  if (req.method && req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return respond(res, 405, { error: "Method not allowed." });
  }

  let response;
  try {
    response = await fetch(FEED_URL, {
      headers: {
        Accept: "application/atom+xml",
        "User-Agent": "Armando-Portfolio",
      },
      signal: AbortSignal.timeout(FEED_TIMEOUT_MS),
    });
  } catch (error) {
    return respond(res, 502, {
      error: `Não foi possível acessar a atividade pública do GitHub: ${error.message}`,
    });
  }

  if (!response.ok) {
    return respond(res, 502, {
      error: `O feed público do GitHub respondeu com o erro ${response.status}.`,
    });
  }

  const commits = parseCommitEntries(await response.text());
  return respond(res, 200, { commits });
}

export default function handler(req, res) {
  return handleCommits(req, res);
}
