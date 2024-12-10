import { useEffect } from "react";
import { logout } from "../features/auth/apis/auth";
import { useAuthStore } from "../features/auth/store/authStore";
import { AUTH_URL } from "../features/auth/constants/url";
import { css } from "@emotion/react";
import Logo from "../shared/components/ui/Logo";
import ServiceMenu from "../shared/components/ui/ServiceMenu";
import AuthMenu from "../shared/components/ui/AuthMenu";
import Button from "../shared/components/ui/Button";

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
  }, [setToken]);

  return (
    <header css={[gnbStyle]}>
      <Logo />

      <ServiceMenu title="서비스 메뉴">
        <ServiceMenu.Item path="/todo" text="투두 리스트" />
      </ServiceMenu>

      <AuthMenu title="로그인 메뉴">
        {token && (
          <AuthMenu.Item>
            <Button variant="secondary" onClick={onLogout}>
              로그아웃
            </Button>
          </AuthMenu.Item>
        )}
        {!token && (
          <AuthMenu.Item>
            <Button variant="primary" to={AUTH_URL.LOGIN.PATH} asChild>
              {AUTH_URL.LOGIN.TEXT}
            </Button>
          </AuthMenu.Item>
        )}
      </AuthMenu>
    </header>
  );
};

export default Gnb;

// styles
const gnbStyle = css`
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  column-gap: 12px;
  width: 100%;
  max-width: 1200px;
  height: 54px;
  margin: 0 auto;
  padding: 0 8px;
  border-bottom: 1px solid #aaa;
`;
