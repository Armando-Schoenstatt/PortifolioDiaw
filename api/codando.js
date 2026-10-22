import { handleCodando } from "../apps/WakaTimeAPI/api/_codando.js";

export default function handler(req, res) {
  return handleCodando(req, res, process.env);
}
