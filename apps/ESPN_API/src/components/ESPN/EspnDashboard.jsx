import { IoFootball } from "react-icons/io5";
import Futebol from "./Futebol";
import "./ESPN.css";

/**
 * Painel de futebol.
 *
 * Para usar no seu projeto, copie:
 *   • a pasta components/ESPN
 *   • services/espnService.js e config/espnConfig.js
 *
 * <EspnDashboard />
 */
export default function EspnDashboard() {
  return (
    <div className="espn">
      <Futebol />
    </div>
  );
}

export function EspnIcon({ className }) {
  return (
    <span className={`${className ?? ""} espn-hero-icons`} aria-hidden="true">
      <IoFootball />
    </span>
  );
}
