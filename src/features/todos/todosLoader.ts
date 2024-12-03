import { redirect } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { noToken } from "../auth/utils";
import { getTodos } from "./apis/todo";

export const todosLoader = async (queryClient: QueryClient) => {
  // NOTE: 리다이렉트
  if (noToken()) {
    return redirect("/auth");
  }

  const data = await queryClient.ensureQueryData({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return data;
};
