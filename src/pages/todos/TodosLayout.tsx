import TodoList from "./components/todoList/TodoList";
import TodoDetail from "./components/todoDetail/TodoDetail";
import TodoForm from "./components/todoForm/TodoForm";
import { useTodoStore } from "../../store/todoStore";
import { useParams } from "react-router-dom";

const TodosLayout = () => {
  const { mode } = useTodoStore();
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
