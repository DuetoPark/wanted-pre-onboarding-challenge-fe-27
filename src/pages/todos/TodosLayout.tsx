import TodoList from "../../features/todos/components/TodoList";
import { Outlet } from "react-router-dom";

const TodosLayout = () => {
  return (
    <div>
      <h2>TodosLayout</h2>

      <TodoList />
      <Outlet />
    </div>
  );
};

export default TodosLayout;
