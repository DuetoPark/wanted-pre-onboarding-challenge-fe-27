import { useTodoStore } from "../../../../store/todoStore";
import { Link, useLoaderData } from "react-router-dom";

export interface TodoType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const TodoList = () => {
  const { setMode } = useTodoStore();
  const todos = useLoaderData() as TodoType[] | null;

  return (
    <section>
      <header>
        <h3>TodoList</h3>
        <button onClick={() => setMode("new")}>일정 추가</button>
      </header>

      <ol>
        {todos &&
          todos?.map((todo) => (
            <li key={todo.id}>
              <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
            </li>
          ))}
      </ol>
    </section>
  );
};

export default TodoList;
