import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://mobileo-server.vercel.app/',
  // baseURL: 'http://localhost:5001'
})