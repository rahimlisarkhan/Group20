import axios from "axios";
import { baseURL } from "shared/constant/baseUrl";

export const instanceAxios = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    Accept: "application/json",
  },
  //   params: {
  //     api_key: "7e3d70e2d0fc85df0bfb0113024f1a15",
  //   },
});

// Add a request interceptor
instanceAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("request!");

    // config.headers.Authorization = "Brear asjhhfjbasdbabhfakdakjdbfjbdkdadasd";

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instanceAxios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response!");

    // if (response.status === 200) {
    //   alert("Succesfully!");
    // }

    localStorage.setItem("secr", "sec");

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // alert(error.message);
    return Promise.reject(error);
  }
);
