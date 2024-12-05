import { AuthPayloadType } from "./types";
import { postJoin, postLogin } from "./apis/auth";

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
