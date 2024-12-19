import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { css } from "@emotion/react";
import { TODO_URL } from "../../constants/url";
import { todoQueries } from "../../todosQuery";
import TodoItem from "./TodoItem";

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

  return (
    <ol css={listStyle}>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          priority={todo.priority}
          priorityText={todo.priorityText}
          onClick={() => goToDetail(todo.id)}
        />
      ))}
    </ol>
  );
};

export default TodoList;

// styles
const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 40vh;
  margin: 8px 0;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none !important;
  }

  li {
    flex-shrink: 0;
  }

  @media (min-width: 576px) {
    height: 60vh;
  }
`;
