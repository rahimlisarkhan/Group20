import { instanceAxios } from "shared/helper/instanceAxios";

export const getMovie = (params) => {
  // return axios.get(movieEndpoint);
  console.log("Request!!!");

  return instanceAxios({ method: "GET", url: "/search/movie", params });
};

export const getSeries = (params) => {
  // return axios.get(movieEndpoint);
  return instanceAxios({ method: "GET", url: "/search/series", params });
};

export const createMovie = (data) => {
  // return axios.get(movieEndpoint);
  return instanceAxios({ method: "POST", url: "/search/series", data });
};

export const uptMovie = (data) => {
  // return axios.get(movieEndpoint);
  return instanceAxios({ method: "PUT", url: "/search/series", data });
};

export const removeMovie = (data) => {
  // return axios.get(movieEndpoint);
  // return instanceAxios({ method: "DELETE", url: "/search/series", params });
  return instanceAxios({ method: "DELETE", url: "/search/series", data });
};
