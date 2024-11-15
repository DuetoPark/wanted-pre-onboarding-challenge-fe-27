import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ApiLog } from "./log";

interface AxiosInterceptorType {
  request: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
  response: (res: AxiosResponse) => AxiosResponse;
  error: (error: AxiosError) => Promise<AxiosError>;
}

// instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// interceptor
const onRequest: AxiosInterceptorType["request"] = (config) => {
  ApiLog.request(config);
  return config;
};

const onResponse: AxiosInterceptorType["response"] = (res) => {
  const { status } = res;

  if (status !== 200) {
    ApiLog.error(res);
  } else {
    ApiLog.response(res);
  }

  return res;
};

const onError: AxiosInterceptorType["error"] = (error) => {
  if (axios.isAxiosError(error)) {
    ApiLog.error(error);
  }

  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest);
axiosInstance.interceptors.response.use(onResponse, onError);

export { axiosInstance };
