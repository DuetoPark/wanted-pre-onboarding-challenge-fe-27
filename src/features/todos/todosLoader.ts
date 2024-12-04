import { redirect } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { noToken } from "../auth/utils";
import { todoQueries } from "./todosQuery";

export const todosLoader = async (queryClient: QueryClient) => {
  // NOTE: 리다이렉트
  if (noToken()) {
    return redirect("/auth");
  }

  return queryClient.ensureQueryData({ ...todoQueries.list() });
};
