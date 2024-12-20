import { css } from "@emotion/react";
import TodoItem from "./TodoItem";
import { TodoType } from "../../todo";

export interface ITodoListProps {
  todos?: TodoType[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  onClick: (id: string) => void;
}

const TodoList = ({
  isLoading,
  isError,
  error,
  todos,
  onClick,
}: ITodoListProps) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error?.message}</p>;
  }

  const handleClick = (id: string) => {
    onClick(id);
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
          onClick={() => handleClick(todo.id)}
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
