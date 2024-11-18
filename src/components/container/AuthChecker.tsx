import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

interface AuthCheckerPropsType {
  children: ReactNode;
}

const AuthChecker = ({ children }: AuthCheckerPropsType) => {
  const { token, setToken } = useAuthStore();

  if (!window.localStorage.getItem("token") || !token) {
    setToken(null);
    window.localStorage.removeItem("token");

    if (window.confirm("로그인을 해주세용")) {
      return <Navigate to="/auth" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default AuthChecker;
