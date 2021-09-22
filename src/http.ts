import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    'Accept': "application/json",
    'Authorization': `Bearer ${process.env.SANCTUM_TOKEN}`
  }
});

console.log(process.env.SANCTUM_TOKEN);

export default apiClient;