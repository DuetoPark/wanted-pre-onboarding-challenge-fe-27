import { axiosInstance } from "./instance";

interface RequestMethdType {
  get: <T>(url: string) => Promise<T>;
  post: <T, R>(url: string, payload: T) => Promise<R>;
  delete: (url: string) => Promise<null>;
  update: <T, R>(url: string, payload: T) => Promise<R>;
}

export const axiosRequest: RequestMethdType = {
  get: async (url) => axiosInstance.get(url),
  post: async (url, payload) => axiosInstance.post(url, payload),
  delete: async (url) => axiosInstance.delete(url),
  update: async (url, payload) => axiosInstance.put(url, payload),
};
