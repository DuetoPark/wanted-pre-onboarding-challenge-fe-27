import { useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../features/auth/apis/auth";
import { useAuthStore } from "../features/auth/store/authStore";
import { AUTH_URL } from "../features/auth/constants/url";

const Gnb = () => {
  const { token, setToken } = useAuthStore();

  const onLogout = () => {
    logout();
    setToken(null);
  };

  useEffect(() => {
    if (
      window.localStorage.getItem("token") &&
      window.localStorage.getItem("token") !== ""
    ) {
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
          {token && (
            <li>
              <button onClick={onLogout}>로그아웃</button>
            </li>
          )}
          {!token && (
            <li>
              <Link to={AUTH_URL.LOGIN.PATH}>{AUTH_URL.LOGIN.TEXT}</Link>
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
