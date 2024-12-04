import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { TODO_URL } from "../url";
import { todoQueries } from "../todosQuery";

const TodoList = () => {
  const {
    data: todos,
    isLoading,
    isError,
    error,
  } = useQuery(todoQueries.list());
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

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
        {todos?.map((todo) => (
          <li key={todo.id}>
            <button onClick={() => goToDetail(todo.id)}>{todo.title}</button>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default TodoList;
