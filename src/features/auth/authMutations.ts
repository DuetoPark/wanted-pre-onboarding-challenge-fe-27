import { postLogin, postJoin } from "./apis/auth";
import { AuthPayloadType } from "./types";

export const authMutations = {
  login: () => ({
    mutationFn: async ({ email, password }: AuthPayloadType) =>
      postLogin({ email, password }),
  }),
  join: () => ({
    mutationFn: async ({ email, password }: AuthPayloadType) =>
      postJoin({ email, password }),
  }),
};
