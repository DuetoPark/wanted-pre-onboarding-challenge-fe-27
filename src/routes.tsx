import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/auth/AuthLayout";
import JoinPage from "./pages/auth/join/JoinPage";
import LoginPage from "./pages/auth/login/LoginPage";
import App from "./App";
import NotFound from "./pages/error/NotFound";
import AuthChecker from "./components/container/AuthChecker";
import TodosLayout from "./pages/todos/TodosLayout";
import { getTodos } from "./pages/todos/apis/todo";
import TodoForm from "./pages/todos/components/todoForm/TodoForm";
import TodoDetail from "./pages/todos/components/todoDetail/TodoDetail";

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
            element: <TodoForm />,
          },
          {
            path: ":todoId",
            element: <TodoDetail />,
          },
          {
            path: ":todoId/modify",
            element: <TodoForm />,
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
