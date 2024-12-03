import {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  isAxiosError,
} from "axios";

interface Log {
  request(config: InternalAxiosRequestConfig): void;
  response(res: AxiosResponse): void;
  error(error: AxiosError | AxiosResponse): void;
}

const ApiLog: Log = {
  request(config: InternalAxiosRequestConfig) {
    const { method, url } = config;
    console.log(`🛫 [API - REQUEST] ${method?.toUpperCase()} ${url}`);
  },
  response(res: AxiosResponse) {
    const { method, url } = res.config;
    const { status } = res;

    console.log(
      `🛬 [API - RESPONSE] ${method?.toUpperCase()} ${url} | status: ${status}`
    );
  },
  error(error: AxiosError | AxiosResponse) {
    if (isAxiosError(error)) {
      // NOTE: error 타입이 AxiosError 인 경우
      const { method, url } = error.config as InternalAxiosRequestConfig;
      const { status, code } = error;

      console.error(
        `🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | status: ${status} (${code})`
      );
    } else {
      // NOTE: error 타입이 AxiosResponse 인 경우
      const { method, url } = error.config;
      const { status, statusText } = error;

      console.error(
        `🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | status: ${status} (${statusText})`
      );
    }
  },
};

export { ApiLog };
