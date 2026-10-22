import { handleEspn } from "../apps/ESPN_API/api/_espn.js";

export default function handler(req, res) {
  return handleEspn(req, res);
}
