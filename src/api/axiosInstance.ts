import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.server.com/",
});

export default axiosInstance;