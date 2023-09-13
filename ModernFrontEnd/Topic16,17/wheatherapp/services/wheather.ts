import { AxiosHeaders, AxiosPromise, AxiosRequestConfig } from "axios";
import { instanceAxios } from "../shared/helper/instanceAxios";
import { WheatherType } from "../interface/data";

interface Params {
  q: string;
  country: string;
  cord: number;
}

// export interface Response<Data> {
//   status: number;
//   data: Data;
//   config: AxiosRequestConfig;
//   headers: AxiosHeaders;
//   statusText: string;
// }

interface GetWheather {
  (params?: Partial<Params> | undefined): AxiosPromise<WheatherType>;
}

export const getWheather: GetWheather = (params) => {
  return instanceAxios({ method: "GET", url: `/weather`, params });
};
