import { useEffect, useState } from "react";

const USERNAME = "Armando-Schoenstatt";
const EVENTS_URL = `https://api.github.com/users/${USERNAME}/events/public?per_page=100`;

async function requestJson(url, signal) {
  const response = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
    signal,
  });

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error("O limite temporário da API do GitHub foi atingido. Tente novamente mais tarde.");
    }
    throw new Error(`Não foi possível carregar a atividade do GitHub (erro ${response.status}).`);
  }

  return response.json();
}

async function fetchRecentCommits(signal) {
  const events = await requestJson(EVENTS_URL, signal);
  if (!Array.isArray(events)) {
    throw new Error("O GitHub retornou uma resposta de atividade inválida.");
  }

  const uniquePushes = new Map();
  events
    .filter((event) => event.type === "PushEvent" && event.repo?.name && event.payload?.head)
    .forEach((event) => {
      const key = `${event.repo.name}:${event.payload.head}`;
      if (!uniquePushes.has(key)) uniquePushes.set(key, event);
    });

  const pushes = [...uniquePushes.values()].slice(0, 8);
  return Promise.all(
    pushes.map(async (event) => {
      const commit = await requestJson(
        `https://api.github.com/repos/${event.repo.name}/commits/${event.payload.head}`,
        signal
      );

      return {
        sha: commit.sha,
        message: commit.commit.message.split(/\r?\n/, 1)[0] || "Atualização do projeto",
        date: commit.commit.author?.date || event.created_at,
        repository: event.repo.name,
        url: commit.html_url,
      };
    })
  );
}

export default function GitHubCommits() {
  const [attempt, setAttempt] = useState(0);
  const [lang, setLang] = useState("pt");
  const [state, setState] = useState({ status: "loading", commits: [], error: null });
  const text = lang === "pt"
    ? {
        loading: "Carregando commits públicos…",
        empty: "Ainda não há commits públicos recentes para exibir.",
        retry: "Tentar novamente",
        repository: "repositório",
        error: "Não foi possível carregar os commits.",
        open: "Abrir commit no GitHub",
      }
    : {
        loading: "Loading public commits…",
        empty: "There are no recent public commits to show yet.",
        retry: "Try again",
        repository: "repository",
        error: "Could not load commits.",
        open: "Open commit on GitHub",
      };

  useEffect(() => {
    const handleLanguage = (event) => setLang(event.detail.lang);
    window.addEventListener("portfolio-language", handleLanguage);
    return () => window.removeEventListener("portfolio-language", handleLanguage);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    setState({ status: "loading", commits: [], error: null });

    fetchRecentCommits(controller.signal)
      .then((commits) => setState({ status: "ready", commits, error: null }))
      .catch((error) => {
        if (error.name !== "AbortError") {
          setState({ status: "error", commits: [], error });
        }
      });

    return () => controller.abort();
  }, [attempt]);

  if (state.status === "loading") {
    return <p className="text-sm text-gray-500" role="status">{text.loading}</p>;
  }

  if (state.status === "error") {
    return (
      <div className="commit-message" role="alert">
        <p>{text.error} {state.error.message}</p>
        <button type="button" onClick={() => setAttempt((value) => value + 1)}>
          {text.retry}
        </button>
      </div>
    );
  }

  if (state.commits.length === 0) {
    return <p className="text-sm text-gray-500">{text.empty}</p>;
  }

  const formatDate = new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en", {
    day: "2-digit",
    month: "short",
  });

  const renderCommit = (commit, duplicate = false) => (
    <a
      className="commit-card"
      href={commit.url}
      key={`${commit.sha}${duplicate ? "-copy" : ""}`}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={`${text.open}: ${commit.message}`}
      role="listitem"
      tabIndex={duplicate ? -1 : undefined}
    >
      <span className="commit-card__topline">
        <span className="commit-card__dot" aria-hidden="true" />
        <span className="commit-card__repo">{commit.repository}</span>
        <time dateTime={commit.date}>{formatDate.format(new Date(commit.date))}</time>
      </span>
      <strong>{commit.message}</strong>
      <span className="commit-card__sha">{commit.sha.slice(0, 7)} · {text.repository}</span>
    </a>
  );

  return (
    <div className="commit-marquee" role="region" aria-label="GitHub commits">
      <div className="commit-track" role="list">
        {state.commits.map((commit) => renderCommit(commit))}
        <div className="commit-track__duplicate" role="presentation" aria-hidden="true">
          {state.commits.map((commit) => renderCommit(commit, true))}
        </div>
      </div>
    </div>
  );
}
