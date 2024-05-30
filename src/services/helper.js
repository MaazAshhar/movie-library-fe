import axios from "axios";
import { getToken } from "../auth";

const BASE_URL = "https://movie-library-be.vercel.app";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      return Promise.resolve(config);
    }
  },
  (error) => Promise.reject(error)
);
