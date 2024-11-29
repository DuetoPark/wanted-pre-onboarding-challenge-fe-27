import { useLoaderData, useNavigate } from "react-router-dom";
import type { TodoType } from "../../type";
import { TODO_URL } from "../../../../routes";

const TodoList = () => {
  const todos = useLoaderData() as TodoType[] | null;
  const navigate = useNavigate();

  const goToDetail = (id: string) => {
    navigate(TODO_URL.DETAIL(id));
  };

  const goToNew = () => {
    navigate(TODO_URL.NEW);
  };

  return (
    <section>
      <header>
        <h3>TodoList</h3>
        <button onClick={goToNew}>일정 추가</button>
      </header>

      <ol>
        {todos &&
          todos?.map((todo) => (
            <li key={todo.id}>
              <button onClick={() => goToDetail(todo.id)}>{todo.title}</button>
            </li>
          ))}
      </ol>
    </section>
  );
};

export default TodoList;
