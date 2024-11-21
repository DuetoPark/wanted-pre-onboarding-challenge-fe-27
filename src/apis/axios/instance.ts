import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ApiLog } from "./log";

// type
interface AxiosInterceptorType {
  request: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
  response: <T>(res: AxiosResponse) => ApiResponseType<T>;
  error: (error: AxiosError) => Promise<AxiosError>;
}

interface ApiResponseType<T> extends AxiosResponse {
  data: {
    data: T;
  };
}

// token
const token = window.localStorage.getItem("token");

// instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: token,
  },
});

// interceptor
const onRequest: AxiosInterceptorType["request"] = (config) => {
  ApiLog.request(config);
  return config;
};

const onResponse: AxiosInterceptorType["response"] = (res) => {
  const { status } = res;

  if (status === 200) {
    ApiLog.response(res);
  } else {
    ApiLog.error(res);
  }

  return res.data.data;
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
