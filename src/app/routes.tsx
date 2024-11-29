import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../pages/auth/AuthLayout";
import JoinPage from "../pages/auth/JoinPage";
import LoginPage from "../pages/auth/LoginPage";
import App from "./App";
import NotFound from "../pages/error/NotFound";
import AuthChecker from "../shared/components/container/AuthChecker";
import TodosLayout from "../pages/todos/TodosLayout";
import { getTodos } from "../features/todos/apis/todo";
import TodoFormPage from "../pages/todos/TodoFormPage";
import TodoDetailPage from "../pages/todos/TodoDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <LoginPage />,
          },
          {
            path: "join",
            element: <JoinPage />,
          },
        ],
      },
      {
        path: "todo",
        element: (
          <AuthChecker>
            <TodosLayout />
          </AuthChecker>
        ),
        children: [
          {
            path: "new",
            element: <TodoFormPage />,
          },
          {
            path: ":todoId",
            element: <TodoDetailPage />,
          },
          {
            path: ":todoId/modify",
            element: <TodoFormPage />,
          },
        ],
        loader: todosLoader,
      },
    ],
  },
]);

async function todosLoader() {
  return await getTodos();
}

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
