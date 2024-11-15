import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { axiosRequest } from "../../../apis/axios/request";

interface AuthSchema {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm<AuthSchema>();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string>("");

  const login = ({ email, password }: AuthSchema) => {
    axiosRequest
      .post(`${import.meta.env.VITE_BASE_URL}/users/login`, {
        email,
        password,
      })
      .then((res) => res.data)
      .then((data) => {
        window.localStorage.setItem("token", data.token);
        reset();
        navigate("/");
      })
      .catch((error) => {
        setLoginError(error.response.data.details);
      });
  };

  return (
    <section>
      <h1>login</h1>

      <form onSubmit={handleSubmit(login)}>
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
