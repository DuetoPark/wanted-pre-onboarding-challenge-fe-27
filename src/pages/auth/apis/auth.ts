import { axiosRequest } from "../../../apis/axios/request";
import type { AuthPayloadType, AuthType } from "../types";

export const postLogin = async ({ email, password }: AuthPayloadType) => {
  return axiosRequest.post<AuthPayloadType, AuthType>("/users/login", {
    email,
    password,
  });
};

export const postJoin = async ({ email, password }: AuthPayloadType) => {
  return axiosRequest.post<AuthPayloadType, AuthType>("/users/create", {
    email,
    password,
  });
};

export const logout = () => {
  window.localStorage.removeItem("token");
  location.href = "/auth";
};

export const afterLogin = (token: string) => {
  window.localStorage.setItem("token", token);
  location.replace("/");
};

export const afterJoin = () => {
  location.replace("/auth");
};
