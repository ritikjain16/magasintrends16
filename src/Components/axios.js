import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8001"
  baseURL: "https://magasitrends.vercel.app/",
});

export default instance;
