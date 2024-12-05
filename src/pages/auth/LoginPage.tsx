import { useCallback, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { authMutations } from "../../features/auth/authQuery";
import { useAuthStore } from "../../features/auth/store/authStore";
import { AUTH_URL } from "../../features/auth/constants/url";
import AuthLink from "../../features/auth/components/AuthLink";
import AuthForm from "../../features/auth/components/AuthForm";
import type { AuthPayloadType, AuthType } from "../../features/auth/types";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { setToken } = useAuthStore();

  const { mutate: login } = useMutation({
    ...authMutations.login(),
    onSuccess: (data) => saveTokenAndSetToken(data),
    onError: (error) => showError(error),
  });

  const saveTokenAndSetToken = useCallback((data: AuthType) => {
    saveToken(data.token);
    setToken(data.token);
  }, []);

  const showError = useCallback((error: unknown) => {
    const message = error?.response?.data?.details || "로그인에 실패했습니다";
    setErrorMessage(message);
  }, []);

  const onLogin = useCallback(({ email, password }: AuthPayloadType) => {
    login({ email, password });
  }, []);

  return (
    <section>
      <h1>login</h1>

      <AuthForm
        submitText="로그인"
        errorMessage={errorMessage}
        onPermit={onLogin}
      />

      <AuthLink
        guideMessage="아직 계정이 없다면"
        text={AUTH_URL.JOIN.TEXT}
        path={AUTH_URL.JOIN.PATH}
      />
    </section>
  );
};

export default LoginPage;

function saveToken(token: string) {
  window.localStorage.setItem("token", token);
  location.replace("/");
}
