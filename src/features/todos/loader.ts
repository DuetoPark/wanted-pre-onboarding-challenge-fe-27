import { redirect } from "react-router-dom";
import { noToken } from "../auth/utils";
import { getTodos } from "./apis/todo";

const todoLoader = () => {
  // NOTE: 리다이렉트
  if (noToken()) {
    return redirect("/auth");
  }

  return getTodos();
};

export { todoLoader };
