import TodoList from "./components/todoList/TodoList";
import TodoDetail from "./components/todoDetail/TodoDetail";
import TodoForm from "./components/todoForm/TodoForm";
import { useParams, useSearchParams } from "react-router-dom";

const TodosLayout = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") ?? "read";

  const { todoId } = useParams();

  return (
    <div>
      <h2>TodosLayout</h2>

      <p>mode: {mode}</p>
      <p>todoId: {todoId}</p>

      <TodoList />
      <TodoDetail />
      <TodoForm />
    </div>
  );
};

export default TodosLayout;
