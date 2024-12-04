import { useNavigate, useParams } from "react-router-dom";
import { TODO_URL } from "../../features/todos/url";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { todoMutations, todoQueries } from "../../features/todos/todosQuery";

const TodoDetailPage = () => {
  const { todoId } = useParams();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const {
    data: todoDetail,
    isLoading,
    isError,
    error,
  } = useQuery(todoQueries.detail(todoId));

  const { mutate: deleteTodo } = useMutation({
    ...todoMutations.delete(),
    onSuccess: () => {
      navigate(TODO_URL.HOME, { replace: true });
      queryClient.invalidateQueries({ queryKey: [...todoQueries.lists()] });
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section>
      <header>
        <h3>TodoDetailPage</h3>
        {todoDetail && (
          <div>
            <button onClick={() => navigate(TODO_URL.MODIFY(todoDetail.id))}>
              수정
            </button>
            <button onClick={() => deleteTodo(todoDetail.id)}>삭제</button>
          </div>
        )}
      </header>

      {todoDetail && (
        <div>
          <p>title: {todoDetail.title}</p>
          <p>content: {todoDetail.content}</p>
          <p>작성일: {todoDetail.createdAt}</p>
          <p>수정일: {todoDetail.updatedAt}</p>
        </div>
      )}
    </section>
  );
};

export default TodoDetailPage;
