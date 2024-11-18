import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { logout } from "./apis/auth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Link to="/">홈</Link>
      <Link to="/auth">로그인</Link>
      <button onClick={() => logout()}>로그아웃</button>
    </>
  );
}

export default App;
