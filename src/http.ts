import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8082/api",
  headers: {
    'Accept': "application/json",
    'Authorization': `Bearer ${process.env.VUE_APP_SANCTUM_TOKEN}`
  }
});

export default apiClient;