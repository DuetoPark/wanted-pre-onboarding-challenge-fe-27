import { useEffect } from "react";
import { logout } from "../../../features/auth/apis/auth";
import { useAuthStore } from "../../../features/auth/store/authStore";
import { AUTH_URL } from "../../../features/auth/constants/url";
import { css } from "@emotion/react";
import Logo from "../../ui/Logo";
import ServiceMenu from "../../ui/ServiceMenu";
import AuthMenu from "../../ui/AuthMenu";
import Button from "../../ui/Button";
import Layout from "../Layout";

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
      <Layout css={layoutStyle}>
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
      </Layout>
    </header>
  );
};

export default Gnb;

// styles
const gnbStyle = css`
  position: sticky;
  left: 0;
  top: 0;
  border-bottom: 1px solid #ddd;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.24);
`;

const layoutStyle = css`
  display: flex;
  align-items: center;
  column-gap: 12px;
  height: 54px;
`;
