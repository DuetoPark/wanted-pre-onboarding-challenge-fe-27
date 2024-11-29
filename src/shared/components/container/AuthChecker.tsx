import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../../features/auth/store/authStore";

interface AuthCheckerPropsType {
  children: ReactNode;
}

const AuthChecker = ({ children }: AuthCheckerPropsType) => {
  const { setToken } = useAuthStore();

  useEffect(() => {
    if (
      window.localStorage.getItem("token") &&
      window.localStorage.getItem("token") !== ""
    ) {
      setToken(window.localStorage.getItem("token"));
    }
  }, []);

  if (!window.localStorage.getItem("token")) {
    if (window.confirm("로그인을 해주세용")) {
      return <Navigate to="/auth" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default AuthChecker;
