import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { TODO_URL } from "../../features/todos/url";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { todoMutations, todoQueries } from "../../features/todos/todosQuery";

const EMPTY_STRING = "";

const TodoFormPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>(EMPTY_STRING);
  const [content, setContent] = useState<string>(EMPTY_STRING);
  const { todoId } = useParams();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();
  const { data: todoDetail } = useQuery(todoQueries.detail(todoId));
  const { mutate: createTodo } = useMutation({
    ...todoMutations.create(),
    onSuccess(data) {
      setTitle(EMPTY_STRING);
      setContent(EMPTY_STRING);
      navigate(TODO_URL.DETAIL(data.id));
      queryClient.invalidateQueries({ queryKey: [...todoQueries.lists()] });
    },
  });
  const { mutate: updateTodo } = useMutation({
    ...todoMutations.update(),
    onSuccess(data) {
      navigate(TODO_URL.DETAIL(data.id));
      queryClient.invalidateQueries({ queryKey: [...todoQueries.lists()] });
    },
  });

  const addTask = async () => {
    // 유효성 검사 (빈칸)
    if (
      !ensureNotEmpty(title, titleRef) ||
      !ensureNotEmpty(content, contentRef)
    )
      return;

    // task 등록 api 호출
    createTodo({ title, content });
  };

  const cancel = () => {
    navigate(TODO_URL.HOME);
  };

  const updateTodoById = async () => {
    // 유효성 검사 (빈칸)
    if (
      !ensureNotEmpty(title, titleRef) ||
      !ensureNotEmpty(content, contentRef)
    )
      return;

    // task 수정 api 호출
    if (!todoId) return;

    updateTodo({ id: todoId, payload: { content, title } });
  };

  useEffect(
    function initTitleAndContent() {
      setTitle(todoDetail ? todoDetail.title : EMPTY_STRING);
      setContent(todoDetail ? todoDetail.content : EMPTY_STRING);
    },
    [todoDetail]
  );

  return (
    <div>
      <h3>To do form</h3>

      <form action="">
        <div>
          <label htmlFor="title">title</label>
          <input
            ref={titleRef}
            type="text"
            value={title}
            name="title"
            id="title"
            placeholder="enter title"
            onInput={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="content">content</label>
          <input
            ref={contentRef}
            type="text"
            value={content}
            name="content"
            id="content"
            placeholder="enter content"
            onInput={(e) => setContent(e.target.value)}
          />
        </div>

        <div>
          {!todoId && (
            <button type="button" onClick={addTask}>
              등록
            </button>
          )}

          {todoId && (
            <button type="button" onClick={updateTodoById}>
              수정
            </button>
          )}

          <button type="button" onClick={cancel}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoFormPage;

function isEmpty(input: string) {
  return input.trim() === EMPTY_STRING;
}

function focusElem<T extends HTMLElement>(ref: React.RefObject<T>) {
  ref?.current?.focus();
}

function ensureNotEmpty(value: string, ref: React.RefObject<HTMLInputElement>) {
  if (isEmpty(value)) {
    focusElem(ref);
    return false;
  }

  return true;
}
