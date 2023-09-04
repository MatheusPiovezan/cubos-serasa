import axios from "axios";

export default axios.create({
  baseURL: "https://backcubos-1-n6836554.deta.app",
  headers: { "Content-Type": "application/json" },
});
