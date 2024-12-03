import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "../pages/error/NotFound";
import { authRouter } from "../features/auth/router";
import { todosRouter } from "../features/todos/router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [authRouter, todosRouter],
  },
]);

interface TodoUrlType {
  HOME: string;
  NEW: string;
  DETAIL: (id: string) => string;
  MODIFY: (id: string) => string;
}

export const TODO_URL: TodoUrlType = Object.freeze({
  HOME: "/todo",
  NEW: "/todo/new",
  DETAIL: (id: string) => `/todo/${id}`,
  MODIFY: (id: string) => `/todo/${id}/modify`,
});
