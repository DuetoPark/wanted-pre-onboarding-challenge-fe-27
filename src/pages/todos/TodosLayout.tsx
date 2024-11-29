import TodoList from "./components/todoList/TodoList";
import { Outlet, useLocation, useParams } from "react-router-dom";

const TodosLayout = () => {
  const { todoId } = useParams();
  const isModify = useLocation().pathname.includes("modify");

  return (
    <div>
      <h2>TodosLayout</h2>

      <p>mode: {isModify ? "modify" : "read"}</p>
      <p>todoId: {todoId}</p>

      <TodoList />
      <Outlet />
    </div>
  );
};

export default TodosLayout;
