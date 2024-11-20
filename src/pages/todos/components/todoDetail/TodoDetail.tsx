import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { TodoType } from "../todoList/TodoList";
import axios from "axios";
import { useAuthStore } from "../../../../store/authStore";

const TodoDetail = () => {
  const { todoId } = useParams();
  const [detail, setDetail] = useState<TodoType | null>(null);
  const { token } = useAuthStore();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const mode = searchParams.get("mode") ?? "read";

  const removeTodo = () => {
    axios
      .delete(`${import.meta.env.VITE_BASE_URL}/todos/${todoId}`, {
        headers: { Authorization: token },
      })
      .then(() => {
        navigate("/todo");
        setDetail(null);
      });
  };

  const updateTodo = (id: string) => {
    // 모드 변경 > modify
    navigate(`/todo/${id}?mode=modify`);
  };

  useEffect(() => {
    if (!todoId) return;

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/todos/${todoId}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        const createAt = new Date(res.data.data.createdAt);
        const year = createAt.getFullYear();
        const month = createAt.getMonth() + 1;
        const date = createAt.getDate();
        const hour = createAt.getHours();
        const min = createAt.getMinutes();

        return {
          ...res.data.data,
          createdAt: `${year}-${month}-${date} ${hour}:${min}`,
        };
      })
      .then((data) => {
        const updatedAt = new Date(data.updatedAt);
        const year = updatedAt.getFullYear();
        const month = updatedAt.getMonth() + 1;
        const date = updatedAt.getDate();
        const hour = updatedAt.getHours();
        const min = updatedAt.getMinutes();

        return {
          ...data,
          updatedAt: `${year}-${month}-${date} ${hour}:${min}`,
        };
      })
      .then((data) => {
        setDetail(data);
      });
  }, [todoId]);

  if (mode !== "read") return;

  if (!todoId) return;

  return (
    <section>
      <header>
        <h3>TodoDetail</h3>
        {detail && (
          <div>
            <button onClick={() => updateTodo(detail.id)}>수정</button>
            <button onClick={removeTodo}>삭제</button>
          </div>
        )}
      </header>

      {detail && (
        <div>
          <p>title: {detail.title}</p>
          <p>content: {detail.content}</p>
          <p>작성일: {detail.createdAt}</p>
          <p>수정일: {detail.updatedAt}</p>
        </div>
      )}
    </section>
  );
};

export default TodoDetail;
