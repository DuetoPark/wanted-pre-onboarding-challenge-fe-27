import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTodo, getTodoById } from "../../apis/todo";
import type { TodoType } from "../../type";
import { formatDate, formatTime } from "../../utils/date";
import { TODO_URL } from "../../../../routes";

const TodoDetail = () => {
  const { todoId } = useParams();
  const [detail, setDetail] = useState<TodoType | null>(null);
  const navigate = useNavigate();

  const removeTodo = async (id: string) => {
    await deleteTodo(id).then(() => {
      navigate(TODO_URL.HOME);
      setDetail(null);
    });
  };

  const moveToUpdate = (id: string) => {
    navigate(TODO_URL.MODIFY(id));
  };

  useEffect(() => {
    if (!todoId) return;

    getTodoById(todoId)
      .then((res) => {
        return {
          ...res,
          createdAt: `${formatDate(res.createdAt)} ${formatTime(
            res.createdAt
          )}`,
          updatedAt: `${formatDate(res.updatedAt)} ${formatTime(
            res.updatedAt
          )}`,
        };
      })
      .then((data) => {
        setDetail(data);
      });
  }, [todoId]);

  return (
    <section>
      <header>
        <h3>TodoDetail</h3>
        {detail && (
          <div>
            <button onClick={() => moveToUpdate(detail.id)}>수정</button>
            <button onClick={() => removeTodo(detail.id)}>삭제</button>
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
