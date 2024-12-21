import { useCallback, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { authMutations } from "../../features/auth/authMutations";
import { AUTH_URL } from "../../features/auth/constants/url";
import AuthForm from "../../features/auth/components/AuthForm";
import AuthLink from "../../features/auth/components/AuthLink";
import type { AuthPayloadType } from "../../features/auth/types";

const JoinPage = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { mutate: join } = useMutation({
    ...authMutations.join(),
    onSuccess: () => moveToLogin(),
    onError: (error) => showError(error),
  });

  const moveToLogin = useCallback(() => {
    location.replace(AUTH_URL.LOGIN.PATH);
  }, []);

  const showError = useCallback((error: unknown) => {
    const message = error?.response?.data?.details || "회원가입에 실패했습니다";
    setErrorMessage(message);
  }, []);

  const onJoin = useCallback(
    ({ email, password }: AuthPayloadType) => {
      join({ email, password });
    },
    [join]
  );

  return (
    <section>
      <h1>Join</h1>

      <AuthForm
        submitText="회원가입"
        errorMessage={errorMessage}
        onPermit={onJoin}
      />

      <AuthLink
        guideMessage="이미 계정이 있다면"
        text={AUTH_URL.LOGIN.TEXT}
        path={AUTH_URL.LOGIN.PATH}
      />
    </section>
  );
};

export default JoinPage;
