import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../../../../store/authStore";

const TodoForm = () => {
  const { token } = useAuthStore();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { todoId } = useParams();
  const [searchParams] = useSearchParams();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const mode = searchParams.get("mode") ?? "read";

  const addTask = () => {
    // 유효성 검사 (빈칸)
    if (title.trim() === "") {
      setTitle("");
      titleRef?.current?.focus();
      return;
    }

    // 유효성 검사 (빈칸)
    if (content.trim() === "") {
      setContent("");
      contentRef?.current?.focus();
      return;
    }

    // task 등록 api 호출
    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/todos`,
        { title, content },
        { headers: { Authorization: token } }
      )
      .then((res) => {
        console.log(res);
        setTitle("");
        setContent("");
      });
  };

  const cancel = () => {
    navigate("/todo");
  };

  const updateTodo = () => {
    // 유효성 검사 (빈칸)
    if (title.trim() === "") {
      setTitle("");
      titleRef?.current?.focus();
      return;
    }

    // 유효성 검사 (빈칸)
    if (content.trim() === "") {
      setContent("");
      contentRef?.current?.focus();
      return;
    }

    // task 수정 api 호출
    axios.put(
      `${import.meta.env.VITE_BASE_URL}/todos/${todoId}`,
      { title, content },
      { headers: { Authorization: token } }
    );
  };

  useEffect(() => {
    // NOTE: querystring mode === new이면, new 모드로
    if (mode === "new") {
      setTitle("");
      setContent("");
      return;
    }

    // NOTE: todoId 없으면, read 모드로
    if (!todoId) return;

    // NOTE: modify 모드가 아니면 무시
    if (mode !== "modify") return;

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/todos/${todoId}`, {
        headers: { Authorization: token },
      })
      .then((res) => res.data.data)
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
      });
  }, [mode, todoId]);

  // NOTE: read 모드에서 form 숨김
  if (mode === "read") return;

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
          {mode === "new" && (
            <button type="button" onClick={addTask}>
              등록
            </button>
          )}

          {mode === "modify" && (
            <button type="button" onClick={updateTodo}>
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
