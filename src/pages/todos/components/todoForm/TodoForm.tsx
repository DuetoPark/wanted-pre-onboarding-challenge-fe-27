import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { createTodo, getTodoById, updateTodo } from "../../apis/todo";
import { TODO_URL } from "../../../../routes";

const EMPTY_STRING = "";

const TodoForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>(EMPTY_STRING);
  const [content, setContent] = useState<string>(EMPTY_STRING);
  const { todoId } = useParams();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const isModify = useLocation().pathname.includes("modify");

  const addTask = async () => {
    // 유효성 검사 (빈칸)
    if (
      !ensureNotEmpty(title, titleRef) ||
      !ensureNotEmpty(content, contentRef)
    )
      return;

    // task 등록 api 호출
    await createTodo({ title, content }).then((res) => {
      setTitle(EMPTY_STRING);
      setContent(EMPTY_STRING);
      // navigate(`/todo/${res.id}`);
      navigate(TODO_URL.DETAIL(res.id));
    });
  };

  const cancel = () => {
    // navigate("/todo");
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
    await updateTodo(todoId, { content, title }).then((res) => {
      // navigate(`/todo/${res.id}`);
      navigate(TODO_URL.DETAIL(res.id));
    });
  };

  useEffect(() => {
    // NOTE: modify 모드가 아닌 경우
    if (!isModify) {
      setTitle(EMPTY_STRING);
      setContent(EMPTY_STRING);
      return;
    }

    getTodoById(todoId).then((res) => {
      setTitle(res.title);
      setContent(res.content);
    });
  }, [isModify]);

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
          {!isModify && (
            <button type="button" onClick={addTask}>
              등록
            </button>
          )}

          {isModify && (
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

export default TodoForm;

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
