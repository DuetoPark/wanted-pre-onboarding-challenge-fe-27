import { createBrowserRouter } from "react-router-dom";
import { queryClient } from "../providers/QueryProvider";
import { todosLoader } from "../features/todos/todosLoader";
import App from "./App";
import NotFound from "./error/NotFound";
import AuthLayout from "./auth/AuthLayout";
import LoginPage from "./auth/LoginPage";
import JoinPage from "./auth/JoinPage";
import TodosLayout from "./todos/TodosLayout";
import TodoFormPage from "./todos/TodoFormPage";
import TodoDetailPage from "./todos/TodoDetailPage";
import Home from "./home/Home";
import Empty from "../components/ui/Empty";

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
