import { todoLoader } from "./loader";
import TodosLayout from "../../pages/todos/TodosLayout";
import TodoFormPage from "../../pages/todos/TodoFormPage";
import TodoDetailPage from "../../pages/todos/TodoDetailPage";

const todosRouter = Object.freeze({
  path: "todo",
  element: <TodosLayout />,
  loader: todoLoader,
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
