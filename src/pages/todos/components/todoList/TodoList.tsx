import { useEffect, useState } from "react";
import { useTodoStore } from "../../../../store/todoStore";
import axios from "axios";
import { useAuthStore } from "../../../../store/authStore";
import { Link } from "react-router-dom";

interface TodoType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const TodoList = () => {
  const { setMode } = useTodoStore();
  const [todos, setTodos] = useState<TodoType[] | null>(null);
  const { token } = useAuthStore();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/todos`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setTodos(res.data.data);
      });
  }, []);

  return (
    <section>
      <h3>TodoList</h3>

      <button onClick={() => setMode("new")}>일정 추가</button>

      <ol>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default TodoList;
