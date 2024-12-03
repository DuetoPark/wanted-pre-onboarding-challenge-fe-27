import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../../pages/error/NotFound";
import { authRouter } from "../../features/auth/router";
import { todosRouter } from "../../features/todos/router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [authRouter, todosRouter],
  },
]);
