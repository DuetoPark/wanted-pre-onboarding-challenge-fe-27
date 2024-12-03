import { redirect } from "react-router-dom";
import { getTodos } from "./apis/todo";
import { noToken } from "../auth/utils";
import TodosLayout from "../../pages/todos/TodosLayout";
import TodoFormPage from "../../pages/todos/TodoFormPage";
import TodoDetailPage from "../../pages/todos/TodoDetailPage";

const todosRouter = Object.freeze({
  path: "todo",
  element: <TodosLayout />,
  loader: () => {
    // NOTE: 리다이렉트
    if (noToken()) {
      return redirect("/auth");
    }

    return getTodos();
  },
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
});

export { todosRouter };
