import TodoList from "./components/todoList/TodoList";
import TodoDetail from "./components/todoDetail/TodoDetail";
import TodoForm from "./components/todoForm/TodoForm";
import { useTodoStore } from "../../store/todoStore";

const TodosLayout = () => {
  const { mode } = useTodoStore();
  return (
    <div>
      <h2>TodosLayout</h2>

      <p>mode: {mode}</p>

      <TodoList />
      <TodoDetail />
      <TodoForm />
    </div>
  );
};

export default TodosLayout;
