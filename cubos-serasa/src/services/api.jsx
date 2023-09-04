import axios from "axios";

export default axios.create({
  baseURL: "https://backserasa-1-a0644002.deta.app",
  headers: { "Content-Type": "application/json" },
});
