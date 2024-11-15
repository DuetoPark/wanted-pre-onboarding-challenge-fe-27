import { axiosInstance } from "./instance";

export const axiosRequest = {
  get: async (url: string) => await axiosInstance.get(url),
  post: async <T>(url: string, payload: T) =>
    await axiosInstance.post(url, payload),
};
