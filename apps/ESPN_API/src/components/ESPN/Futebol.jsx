import { useState } from "react";
import ESPN_CONFIG from "../../config/espnConfig";
import { fetchSoccerTeams } from "../../services/espnService";
import { Skeleton, TeamLogo } from "./Shared";
import { standingText } from "./translate";
import { useEspn } from "./useEspn";

/**
 * Visão compacta dos clubes, sem calendário, resultados ou classificação.
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
  const team = teams.data?.find((item) => item.id === teamId);

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
        <div className="espn-message error" role="alert">
          <strong>Não foi possível carregar os times da ESPN.</strong>
          <span>{teams.error.message}</span>
          <button type="button" className="espn-retry" onClick={teams.reload}>
            Tentar de novo
          </button>
        </div>
      )}
      {teams.status === "loading" && !teams.data && <Skeleton blocks={[120]} />}
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
    </div>
  );
}
