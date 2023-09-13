import { instanceAxios } from "../shared/helper/createAxios";

export const getMovies = async () =>
  await instanceAxios({
    method: "GET",
    params: { s: "movie", t: "a", limit: 25 },
  });
