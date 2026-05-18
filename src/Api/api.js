import axios from "axios";

const api = axios.create({
  baseURL: "https://zomato-clone-api-5e4m.onrender.com/api",
});

api.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;