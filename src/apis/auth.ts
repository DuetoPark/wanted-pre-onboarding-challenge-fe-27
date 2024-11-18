import { z } from "zod";
import { axiosRequest } from "./axios/request";
import { authSchema } from "../schema/auth";

export type AuthPayloadType = z.infer<typeof authSchema>;

export const postLogin = async ({ email, password }: AuthPayloadType) => {
  return axiosRequest.post<AuthPayloadType>("/users/login", {
    email,
    password,
  });
};

export const postJoin = async ({ email, password }: AuthPayloadType) => {
  return axiosRequest.post<AuthPayloadType>("/users/create", {
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
