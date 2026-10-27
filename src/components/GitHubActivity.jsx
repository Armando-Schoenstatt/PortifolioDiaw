import { useEffect, useRef, useState } from "react";

const USERNAME = "Armando-Schoenstatt";
const CONTRIBUTIONS_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;
const PROFILE_URL = `https://api.github.com/users/${USERNAME}`;
const REPOSITORIES_URL = `${PROFILE_URL}/repos?sort=updated&per_page=4`;

async function fetchJson(url, signal) {
  const response = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
    signal,
  });

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error("O limite temporário da API do GitHub foi atingido. Tente novamente mais tarde.");
    }
    throw new Error(`Não foi possível carregar os dados do GitHub (erro ${response.status}).`);
  }

  return response.json();
}

async function fetchActivity(signal) {
  const [contributionData, profile, repositories] = await Promise.all([
    fetchJson(CONTRIBUTIONS_URL, signal),
    fetchJson(PROFILE_URL, signal),
    fetchJson(REPOSITORIES_URL, signal),
  ]);

  if (!Array.isArray(contributionData.contributions) || contributionData.contributions.length === 0 || !Array.isArray(repositories)) {
    throw new Error("O GitHub retornou dados em um formato inesperado.");
  }

  const contributions = contributionData.contributions.slice(-365);
  let longestStreak = 0;
  let streak = 0;

  contributions.forEach(({ count }) => {
    streak = count > 0 ? streak + 1 : 0;
    longestStreak = Math.max(longestStreak, streak);
  });

  const latestActiveDay = contributions.findLastIndex(({ count }) => count > 0);
  const currentStreak = latestActiveDay >= contributions.length - 2
    ? contributions
      .slice(0, latestActiveDay + 1)
      .reverse()
      .findIndex(({ count }) => count === 0)
    : -1;

  return {
    contributions,
    totalContributions: contributions.reduce((total, day) => total + day.count, 0),
    activeDays: contributions.filter(({ count }) => count > 0).length,
    currentStreak: currentStreak === -1
      ? latestActiveDay >= contributions.length - 2
        ? contributions.length
        : 0
      : currentStreak,
    longestStreak,
    publicRepositories: profile.public_repos,
    repositories,
  };
}

function getCalendarCells(contributions) {
  const firstDay = new Date(`${contributions[0].date}T00:00:00Z`).getUTCDay();
  return [
    ...Array.from({ length: firstDay }, (_, index) => ({ key: `padding-${index}`, padding: true })),
    ...contributions,
  ];
}

function ContributionCalendar({ contributions, lang }) {
  const calendarRef = useRef(null);
  const firstDay = new Date(`${contributions[0].date}T00:00:00Z`).getUTCDay();
  const cells = getCalendarCells(contributions);

  return (
    <div className="github-calendar-scroll">
      <div
        className="github-calendar"
        onKeyDown={(event) => {
          const movement = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[event.key];
          if (!movement) return;
          event.preventDefault();
          const currentIndex = Number(event.target.dataset.contributionIndex);
          const nextIndex = Math.max(0, Math.min(contributions.length - 1, currentIndex + movement));
          calendarRef.current
            ?.querySelector(`[data-contribution-index="${nextIndex}"]`)
            ?.focus();
        }}
        role="grid"
        aria-label={lang === "pt" ? "Contribuições diárias no último ano" : "Daily contributions over the last year"}
        ref={calendarRef}
      >
        {cells.map((day, index) => (
          <span
            aria-label={day.padding ? undefined : `${day.count} · ${day.date}`}
            className={day.padding ? "github-calendar__empty" : "github-calendar__day"}
            data-contribution-index={day.padding ? undefined : index - firstDay}
            data-level={day.level}
            key={day.date ?? day.key}
            role={day.padding ? undefined : "gridcell"}
            tabIndex={index === firstDay ? 0 : -1}
            title={day.padding ? undefined : `${day.count} ${lang === "pt" ? "contribuições em" : "contributions on"} ${day.date}`}
          />
        ))}
      </div>
    </div>
  );
}

function GitHubActivity() {
  const [attempt, setAttempt] = useState(0);
  const [lang, setLang] = useState("pt");
  const [state, setState] = useState({ status: "loading", data: null, error: null });
  const text = lang === "pt"
    ? {
        loading: "Carregando atividade pública do GitHub…",
        error: "Não foi possível carregar os dados públicos do GitHub.",
        retry: "Tentar novamente",
        contributions: "contribuições",
        publicRepositories: "repositórios públicos",
        activeDays: "dias com contribuições",
        currentStreak: "sequência atual",
        longestStreak: "maior sequência no ano",
        explore: "Passe o mouse ou use as setas para explorar",
        less: "Menos",
        more: "Mais",
        repositories: "Repositórios atualizados recentemente",
        allRepositories: "Ver todos no GitHub ↗",
        openRepository: "Abrir repositório",
        repository: "Repositório",
        updated: "Atualizado",
        noLanguage: "Repositório",
      }
    : {
        loading: "Loading public GitHub activity…",
        error: "Could not load public GitHub data.",
        retry: "Try again",
        contributions: "contributions",
        publicRepositories: "public repositories",
        activeDays: "contribution days",
        currentStreak: "current streak",
        longestStreak: "longest streak this year",
        explore: "Hover or use the arrow keys to explore",
        less: "Less",
        more: "More",
        repositories: "Recently updated repositories",
        allRepositories: "View all on GitHub ↗",
        openRepository: "Open repository",
        repository: "Repository",
        updated: "Updated",
        noLanguage: "Repository",
        title: "Code in motion.",
        intro: "Follow my public activity, contributions, and some of the repositories I have been building and updating on GitHub.",
      };

  useEffect(() => {
    const handleLanguage = (event) => setLang(event.detail.lang);
    window.addEventListener("portfolio-language", handleLanguage);
    return () => window.removeEventListener("portfolio-language", handleLanguage);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    setState({ status: "loading", data: null, error: null });

    fetchActivity(controller.signal)
      .then((data) => setState({ status: "ready", data, error: null }))
      .catch((error) => {
        if (error.name !== "AbortError") {
          setState({ status: "error", data: null, error });
        }
      });

    return () => controller.abort();
  }, [attempt]);

  if (state.status === "loading") {
    return <p className="github-activity__status" role="status">{text.loading}</p>;
  }

  if (state.status === "error") {
    return (
      <div className="github-activity__error" role="alert">
        <p>{text.error} {state.error.message}</p>
        <button type="button" onClick={() => setAttempt((value) => value + 1)}>
          {text.retry}
        </button>
      </div>
    );
  }

  const { contributions, totalContributions, activeDays, currentStreak, longestStreak, publicRepositories, repositories } = state.data;
  const stats = [
    { value: publicRepositories, label: text.publicRepositories },
    { value: activeDays, label: text.activeDays },
    { value: currentStreak, label: text.currentStreak },
    { value: longestStreak, label: text.longestStreak },
  ];
  const updatedDate = new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en", {
    month: "short",
    year: "numeric",
  });

  return (
    <div className="github-activity">
      <header className="github-activity__header">
        <div>
          <p className="github-activity__eyebrow">// GITHUB</p>
          <h2>{lang === "pt" ? "Código em movimento." : text.title}</h2>
        </div>
        <p className="github-activity__intro">
          {lang === "pt"
            ? "Aqui você acompanha minha atividade pública, minhas contribuições e alguns dos repositórios que venho desenvolvendo e atualizando no GitHub."
            : text.intro}
        </p>
        <a
          className="github-activity__profile"
          href={`https://github.com/${USERNAME}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          @{USERNAME} ↗
        </a>
      </header>

      <div className="github-activity__overview">
        <section className="github-activity__contributions" aria-label={lang === "pt" ? "Atividade no último ano" : "Activity in the last year"}>
          <div className="github-activity__contribution-heading">
            <div>
              <p className="github-activity__label">{lang === "pt" ? "Atividade no último ano" : "Activity in the last year"}</p>
              <p className="github-activity__total">
                <strong>{totalContributions.toLocaleString(lang === "pt" ? "pt-BR" : "en")}</strong>
                <span>{text.contributions}</span>
              </p>
            </div>
            <span className="github-activity__public"><i />{lang === "pt" ? "Dados públicos" : "Public data"}</span>
          </div>

          <ContributionCalendar contributions={contributions} lang={lang} />

          <div className="github-activity__legend">
            <span>{text.explore}</span>
            <span className="github-activity__scale">
              {text.less}
              {[0, 1, 2, 3, 4].map((level) => <i data-level={level} key={level} />)}
              {text.more}
            </span>
          </div>
        </section>

        <dl className="github-activity__stats">
          {stats.map(({ value, label }) => (
            <div className="github-activity__stat" key={label}>
              <dd>{value.toLocaleString(lang === "pt" ? "pt-BR" : "en")}</dd>
              <dt>{label}</dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="github-activity__repositories-heading">
        <h3>{text.repositories}</h3>
        <a href={`https://github.com/${USERNAME}?tab=repositories`} rel="noopener noreferrer" target="_blank">
          {text.allRepositories}
        </a>
      </div>

      {repositories.length > 0 ? (
        <div className="github-activity__repositories">
          {repositories.map((repository) => (
            <a
              className="github-repository"
              href={repository.html_url}
              key={repository.id}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`${text.openRepository}: ${repository.name}`}
            >
              <span className="github-repository__name">{repository.name}<i>↗</i></span>
              <span className="github-repository__details">
                <span>{repository.language || text.noLanguage}</span>
                <span>★ {repository.stargazers_count}</span>
                <span>{updatedDate.format(new Date(repository.updated_at))}</span>
              </span>
            </a>
          ))}
        </div>
      ) : (
        <p className="github-activity__status">{lang === "pt" ? "Nenhum repositório público encontrado." : "No public repositories found."}</p>
      )}
    </div>
  );
}

export default GitHubActivity;
