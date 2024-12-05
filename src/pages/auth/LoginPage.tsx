import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { authMutations } from "../../features/auth/authQuery";
import { useAuthStore } from "../../features/auth/store/authStore";
import type { AuthPayloadType } from "../../features/auth/types";

const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm<AuthPayloadType>();
  const [loginError, setLoginError] = useState<string>("");
  const { setToken } = useAuthStore();

  const { mutate: login } = useMutation({
    ...authMutations.login(),
    onSuccess(data) {
      window.localStorage.setItem("token", data.token);
      location.replace("/");

      setToken(data.token);

      reset();
    },
    onError(error) {
      const errorMessage =
        error?.response?.data?.details || "로그인에 실패했습니다";
      setLoginError(errorMessage);
    },
  });

  return (
    <section>
      <h1>login</h1>

      <form onSubmit={handleSubmit((formData) => login(formData))}>
        <div>
          <label htmlFor="email">아이디</label>
          <input type="text" id="email" {...register("email")} />
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" {...register("password")} />
        </div>

        {loginError && <p>{loginError}</p>}

        <div>
          <button type="submit">로그인</button>
        </div>

        <div>
          <Link to="/auth/join">회원가입</Link>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
