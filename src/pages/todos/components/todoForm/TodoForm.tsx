import { useTodoStore } from "../../../../store/todo";

const TodoForm = () => {
  const { mode } = useTodoStore();

  if (mode === "read") return;

  return <div>TodoForm</div>;
};

export default TodoForm;
