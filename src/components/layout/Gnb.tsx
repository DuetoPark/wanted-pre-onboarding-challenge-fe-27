import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../apis/auth";
import { useAuthStore } from "../../store/authStore";

const Gnb = () => {
  const [userToken, setUserToken] = useState<string>("");
  const { setToken } = useAuthStore();

  useEffect(() => {
    if (
      window.localStorage.getItem("token") &&
      window.localStorage.getItem("token") !== ""
    ) {
      setUserToken(window.localStorage.getItem("token"));
      setToken(window.localStorage.getItem("token"));
    }
  }, []);

  return (
    <header>
      <h1>
        <Link to="/">홈</Link>
      </h1>

      <nav>
        <h2>메뉴</h2>
        <ul>
          {userToken && (
            <li>
              <button onClick={() => logout()}>로그아웃</button>
            </li>
          )}
          {!userToken && (
            <li>
              <Link to="/auth">로그인</Link>
            </li>
          )}
          <li>
            <Link to="/todo">투두 리스트</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Gnb;
