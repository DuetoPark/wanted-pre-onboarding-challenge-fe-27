import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./pages/auth/AuthLayout";
import JoinPage from "./pages/auth/join/JoinPage";
import LoginPage from "./pages/auth/login/LoginPage";
import App from "./App";
import NotFound from "./pages/error/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);
