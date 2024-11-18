import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/auth/AuthLayout";
import JoinPage from "./pages/auth/join/JoinPage";
import LoginPage from "./pages/auth/login/LoginPage";
import App from "./App";
import NotFound from "./pages/error/NotFound";
import AuthChecker from "./components/container/AuthChecker";
import Gnb from "./components/layout/Gnb";
import TodosLayout from "./pages/todos/TodosLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Gnb />
        <App />
      </>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/auth",
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
    path: "/todo",
    element: (
      <AuthChecker>
        <TodosLayout />
      </AuthChecker>
    ),
  },
  {
    path: "/todo/:todoId",
    element: (
      <AuthChecker>
        <TodosLayout />
      </AuthChecker>
    ),
  },
]);
