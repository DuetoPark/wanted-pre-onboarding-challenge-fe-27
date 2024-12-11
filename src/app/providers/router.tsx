import { createBrowserRouter } from "react-router-dom";
import { queryClient } from "./QueryProvider";
import { todosLoader } from "../../features/todos/todosLoader";
import App from "../App";
import NotFound from "../../pages/error/NotFound";
import AuthLayout from "../../pages/auth/AuthLayout";
import LoginPage from "../../pages/auth/LoginPage";
import JoinPage from "../../pages/auth/JoinPage";
import TodosLayout from "../../pages/todos/TodosLayout";
import TodoFormPage from "../../pages/todos/TodoFormPage";
import TodoDetailPage from "../../pages/todos/TodoDetailPage";
import Home from "../../pages/home/Home";
import Empty from "../../shared/components/ui/Empty";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          { index: true, element: <LoginPage /> },
          { path: "join", element: <JoinPage /> },
        ],
      },
      {
        path: "todo",
        element: <TodosLayout />,
        loader: () => todosLoader(queryClient),
        children: [
          { index: true, element: <Empty>항목을 선택해주세요.</Empty> },
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
      },
    ],
  },
]);
