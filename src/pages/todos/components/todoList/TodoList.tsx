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
  const [todoList, setTodoList] = useState<TodoType[] | null>(null);
  const { token } = useAuthStore();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/todos`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setTodoList(res.data.data);
      });
  }, []);

  return (
    <section>
      <h3>TodoList</h3>

      <button onClick={() => setMode("new")}>일정 추가</button>

      <ol>
        {todoList?.map((item) => (
          <li key={item.id}>
            <Link to={`/todo/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default TodoList;
