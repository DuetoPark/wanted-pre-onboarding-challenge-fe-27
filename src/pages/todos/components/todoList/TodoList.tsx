import { useLoaderData, useNavigate } from "react-router-dom";

export interface TodoType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const TodoList = () => {
  const todos = useLoaderData() as TodoType[] | null;
  const navigate = useNavigate();

  const goToDetail = (id: string) => {
    navigate(`/todo/${id}?mode=read`);
  };

  const goToNew = () => {
    navigate("/todo?mode=new");
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
