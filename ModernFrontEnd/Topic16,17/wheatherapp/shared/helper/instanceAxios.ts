import axios, {
  Axios,
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";

export const instanceAxios: AxiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: "d32bd17e782e54a0729a829c462c76ac",
  },
});

instanceAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);
