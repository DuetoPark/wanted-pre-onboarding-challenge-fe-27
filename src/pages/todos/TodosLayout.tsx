import TodoList from "./components/todoList/TodoList";
import TodoDetail from "./components/todoDetail/TodoDetail";
import TodoForm from "./components/todoForm/TodoForm";

const TodosLayout = () => {
  return (
    <div>
      <h2>TodosLayout</h2>

      <TodoList />
      <TodoDetail />
      <TodoForm />
    </div>
  );
};

export default TodosLayout;
