import { handleWakaTime } from "../apps/WakaTimeAPI/api/_wakatime.js";

export default function handler(req, res) {
  return handleWakaTime(req, res, process.env);
}
