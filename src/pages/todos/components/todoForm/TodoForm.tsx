import { useNavigate } from "react-router-dom";
import { useTodoStore } from "../../../../store/todoStore";
import { useRef, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../../../../store/authStore";

const TodoForm = () => {
  const { token } = useAuthStore();
  const { mode, setMode } = useTodoStore();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  if (mode === "read") return;

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
    setMode("read");
    navigate("/todo");
  };

  return (
    <div>
      <h3>To do form</h3>

      <p>{token}</p>

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
          <button type="button" onClick={addTask}>
            등록
          </button>
          <button type="button" onClick={cancel}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
