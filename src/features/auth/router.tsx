import AuthLayout from "../../pages/auth/AuthLayout";
import LoginPage from "../../pages/auth/LoginPage";
import JoinPage from "../../pages/auth/JoinPage";

const authRouter = Object.freeze({
  path: "auth",
  element: <AuthLayout />,
  children: [
    { index: true, element: <LoginPage /> },
    { path: "join", element: <JoinPage /> },
  ],
});

export { authRouter };
