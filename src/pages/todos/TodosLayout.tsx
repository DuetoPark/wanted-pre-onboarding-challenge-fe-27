import TodoList from "./components/todoList/TodoList";
import TodoDetail from "./components/todoDetail/TodoDetail";

const TodosLayout = () => {
  return (
    <div>
      <h2>TodosLayout</h2>

      <TodoList />
      <TodoDetail />
    </div>
  );
};

export default TodosLayout;
