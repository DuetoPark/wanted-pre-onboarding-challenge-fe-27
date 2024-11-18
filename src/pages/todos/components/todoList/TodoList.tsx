import { useTodoStore } from "../../../../store/todoStore";

const TodoList = () => {
  const { setMode } = useTodoStore();

  return (
    <section>
      <h3>TodoList</h3>

      <button onClick={() => setMode("new")}>일정 추가</button>
    </section>
  );
};

export default TodoList;
