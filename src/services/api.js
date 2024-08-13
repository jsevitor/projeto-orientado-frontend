import axios from "axios";

const api = axios.create({
  baseURL: "https://motley-bird-smash.glitch.me/",
  // baseURL: "http://localhost:3001/",
});

export default api;
