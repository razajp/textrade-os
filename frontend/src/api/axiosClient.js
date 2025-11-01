import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://${window.location.hostname}:5000/api`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
