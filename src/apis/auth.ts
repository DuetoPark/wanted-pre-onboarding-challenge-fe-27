import { z } from "zod";
import { axiosRequest } from "./axios/request";
import { authSchema } from "../schema/auth";
import { useAuthStore } from "../store/authStore";

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
  const { setToken } = useAuthStore();

  window.localStorage.removeItem("token");
  setToken(null);
  location.href = "/auth";
};

export const afterLogin = (token: string) => {
  const { setToken } = useAuthStore();

  window.localStorage.setItem("token", token);
  setToken(token);
  location.replace("/");
};

export const afterJoin = () => {
  location.replace("/auth");
};
