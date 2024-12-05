import { redirect } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { noToken } from "../auth/utils";
import { todoQueries } from "./todosQuery";
import { AUTH_URL } from "../auth/constants/url";

export const todosLoader = async (queryClient: QueryClient) => {
  // NOTE: 리다이렉트
  if (noToken()) {
    return redirect(AUTH_URL.LOGIN.PATH);
  }

  return queryClient.ensureQueryData({ ...todoQueries.list() });
};
