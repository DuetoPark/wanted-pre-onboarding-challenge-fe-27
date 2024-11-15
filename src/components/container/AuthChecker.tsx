import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AuthCheckerPropsType {
  children: ReactNode;
}

const AuthChecker = ({ children }: AuthCheckerPropsType) => {
  if (!window.localStorage.getItem("token")) {
    if (window.confirm("로그인을 해주세용")) {
      return <Navigate to="/auth" replace />;
    }
  }

  return children;
};

export default AuthChecker;
