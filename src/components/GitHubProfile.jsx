import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub, FiStar, FiUsers } from "react-icons/fi";

const USERNAME = "Armando-Schoenstatt";
const API_URL = `https://api.github.com/users/${USERNAME}`;

async function getJson(url, signal) {
  const response = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
    signal,
  });

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error("Limite temporário de consultas do GitHub atingido. Tente novamente mais tarde.");
    }
    throw new Error(`O GitHub respondeu com o erro ${response.status}.`);
  }

  return response.json();
}

async function fetchProfile(signal) {
  const [profile, firstPage] = await Promise.all([
    getJson(API_URL, signal),
    getJson(`${API_URL}/repos?per_page=100&sort=updated`, signal),
  ]);

  const repositories = [...firstPage];
  let nextPage = firstPage.length === 100 ? 2 : null;

  while (nextPage) {
    const page = await getJson(`${API_URL}/repos?per_page=100&sort=updated&page=${nextPage}`, signal);
    repositories.push(...page);
    nextPage = page.length === 100 ? nextPage + 1 : null;
  }

  return {
    profile,
    publicRepositories: profile.public_repos,
    stars: repositories.reduce((total, repository) => total + repository.stargazers_count, 0),
  };
}

export default function GitHubProfile() {
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState({ status: "loading", data: null, error: null });

  useEffect(() => {
    const controller = new AbortController();
    setState((previous) => ({ ...previous, status: "loading", error: null }));

    fetchProfile(controller.signal)
      .then((data) => setState({ status: "ready", data, error: null }))
      .catch((error) => {
        if (error.name !== "AbortError") {
          setState((previous) => ({ ...previous, status: "error", error }));
        }
      });

    return () => controller.abort();
  }, [attempt]);

  if (state.status === "loading" && !state.data) {
    return <p className="text-center text-gray-400">Carregando dados públicos do GitHub…</p>;
  }

  if (state.status === "error" && !state.data) {
    return (
      <div className="card mx-auto max-w-2xl p-6 text-center" role="alert">
        <p className="text-gray-300">{state.error.message}</p>
        <button
          className="mt-4 rounded-lg border border-gray-600 px-4 py-2 text-sm text-white hover:border-gray-400"
          onClick={() => setAttempt((value) => value + 1)}
          type="button"
        >
          Tentar novamente
        </button>
        <a
          className="ml-4 inline-flex items-center gap-2 text-sm text-gray-300 underline"
          href={`https://github.com/${USERNAME}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Abrir perfil <FiExternalLink aria-hidden="true" />
        </a>
      </div>
    );
  }

  const { profile, publicRepositories, stars } = state.data;
  const stats = [
    { label: "Repositórios públicos", value: publicRepositories },
    { label: "Estrelas recebidas", value: stars, icon: FiStar },
    { label: "Seguidores", value: profile.followers, icon: FiUsers },
  ];

  return (
    <div className="card mx-auto max-w-4xl p-6 md:p-8">
      <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
        <img
          className="h-20 w-20 rounded-full border border-gray-700"
          src={profile.avatar_url}
          alt={`Foto de perfil de ${profile.login}`}
          width="80"
          height="80"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold text-white">{profile.name?.trim() || profile.login}</h3>
          <p className="text-sm text-gray-400">@{profile.login}</p>
          {profile.bio && <p className="mt-2 text-sm leading-relaxed text-gray-300">{profile.bio}</p>}
        </div>
        <a
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-semibold text-white transition hover:border-gray-300"
          href={profile.html_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiGithub aria-hidden="true" /> Ver GitHub <FiExternalLink aria-hidden="true" />
        </a>
      </div>

      <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map(({ label, value, icon: Icon }) => (
          <div className="rounded-xl border border-gray-800 bg-gray-950/60 p-4 text-center" key={label}>
            <dt className="flex items-center justify-center gap-2 text-xs font-medium text-gray-400">
              {Icon && <Icon aria-hidden="true" />}
              {label}
            </dt>
            <dd className="mt-2 text-2xl font-bold text-white">{value.toLocaleString("pt-BR")}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 text-center text-xs text-gray-500">
        Resumo calculado a partir dos repositórios públicos do perfil.
      </p>
    </div>
  );
}
