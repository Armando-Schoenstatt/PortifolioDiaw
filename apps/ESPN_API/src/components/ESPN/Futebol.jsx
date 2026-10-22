import { useState } from "react";
import ESPN_CONFIG from "../../config/espnConfig";
import { fetchSoccerTeam, fetchSoccerTeams } from "../../services/espnService";
import { Card, ErrorBox, Skeleton, TeamLogo } from "./Shared";
import { GameList } from "./Games";
import { standingText } from "./translate";
import { useEspn, useNow } from "./useEspn";

/**
 * Jogos ao vivo e próximos jogos do clube selecionado.
 *
 * <Futebol />                      → time de ESPN_CONFIG.SOCCER.DEFAULT_TEAM_ID
 * <Futebol initialTeam="2022" />   → outro time (id da ESPN)
 */

const { SOCCER } = ESPN_CONFIG;

export default function Futebol({ initialTeam = SOCCER.DEFAULT_TEAM_ID }) {
  const allowedTeamIds = SOCCER.AVAILABLE_TEAM_IDS;
  const [teamId, setTeamId] = useState(() =>
    allowedTeamIds.includes(String(initialTeam)) ? String(initialTeam) : SOCCER.DEFAULT_TEAM_ID
  );
  const teams = useEspn(fetchSoccerTeams, []);
  const schedule = useEspn(() => fetchSoccerTeam(teamId), [teamId]);
  const now = useNow();
  const team = teams.data?.find((item) => item.id === teamId) ?? schedule.data?.team;
  const liveGames = schedule.data?.next.filter((game) => game.state === "in") ?? [];
  const upcomingGames = schedule.data?.next.filter((game) => game.state === "pre").slice(0, 3) ?? [];

  return (
    <div className="espn-sport">
      <div className="espn-toolbar">
        <label className="espn-select">
          <span>Time</span>
          <select
            value={teamId}
            onChange={(event) => {
              const nextTeamId = String(event.target.value);
              if (allowedTeamIds.includes(nextTeamId)) setTeamId(nextTeamId);
            }}
            disabled={teams.status === "error"}
          >
            {teams.status === "loading" && !teams.data && (
              <option value={teamId}>Carregando times…</option>
            )}
            {(teams.data ?? []).map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {teams.status === "error" && (
        <ErrorBox error={teams.error} onRetry={teams.reload} />
      )}
      {teams.status === "loading" && !teams.data && <Skeleton blocks={[120]} />}
      {schedule.status === "error" && <ErrorBox error={schedule.error} onRetry={schedule.reload} />}
      {schedule.status === "loading" && !schedule.data && <Skeleton blocks={[120, 120]} />}
      {team && (
        <header className="espn-team">
          <TeamLogo team={team} size={64} />
          <div className="espn-team-info">
            <h2>{team.name}</h2>
            <p>{standingText(team.standing) ?? SOCCER.LEAGUE_NAME}</p>
            {team.record && <p>Campanha: {team.record}</p>}
          </div>
        </header>
      )}
      {schedule.data && (
        <>
          <Card title="Ao vivo">
            <GameList
              games={liveGames}
              now={now}
              empty={`Nenhum jogo de ${team?.short ?? "Atlético-MG"} ao vivo neste momento.`}
            />
          </Card>
          <Card title="Próximos jogos">
            <GameList
              games={upcomingGames}
              now={now}
              empty="Nenhum próximo jogo encontrado."
            />
          </Card>
        </>
      )}
    </div>
  );
}
