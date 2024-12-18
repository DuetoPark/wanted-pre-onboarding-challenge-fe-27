import { css } from "@emotion/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { todoMutations, todoQueries } from "../../todosQuery";
import { useNavigate, useParams } from "react-router-dom";
import Hr from "../../../../components/ui/Hr";
import Button from "../../../../components/ui/Button";
import { useCallback } from "react";
import { TODO_URL } from "../../constants/url";
import { useToastContext } from "../../../../providers/ToastProvider";
import EditButtonsWrapper from "../EditButtonsWrapper";

const TodoDetail = () => {
  const navigate = useNavigate();
  const { todoId } = useParams();
  const { showToast } = useToastContext();
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

  const deleteTodoAndShowToast = useCallback(
    (id: string, todoTitle: string) => {
      deleteTodo(id);
      showToast(`${todoTitle} 항목이 삭제되었습니다`, "info");
    },
    [deleteTodo, showToast]
  );

  if (isLoading || !todoDetail) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <article css={articleStyle}>
      <header css={headerStyle}>
        <h4 css={titleStyle}>{todoDetail.title}</h4>

        <div css={timeStyle}>
          <p>{todoDetail.createdAt} 작성</p>
          {todoDetail.createdAt !== todoDetail.updatedAt && (
            <p>{todoDetail.updatedAt} 수정</p>
          )}
        </div>
      </header>

      <Hr thickness="thin" />

      <p css={contentStyle}>{todoDetail.content}</p>

      <EditButtonsWrapper>
        <Button onClick={() => navigate(TODO_URL.MODIFY(todoDetail.id))}>
          수정
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            deleteTodoAndShowToast(todoDetail.id, todoDetail.title)
          }
        >
          삭제
        </Button>
      </EditButtonsWrapper>
    </article>
  );
};

export default TodoDetail;

// styles
const articleStyle = css`
  padding: 8px;
`;

const headerStyle = css`
  padding-bottom: 8px;
`;

const titleStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: #646cff;
`;

const timeStyle = css`
  margin-top: 8px;
  font-size: 12px;
  color: #777;
`;

const contentStyle = css`
  padding-top: 12px;
  font-size: 14px;
`;
