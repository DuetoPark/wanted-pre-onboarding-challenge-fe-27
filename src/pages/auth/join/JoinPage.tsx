import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const EmailSchema = z.string().email({ message: "Invalid email address" });
const PasswordSchema = z
  .string()
  .min(8, { message: "Must be 8 or more characters long" });

const authSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});

type AuthSchema = z.infer<typeof authSchema>;

const JoinPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<AuthSchema>({ resolver: zodResolver(authSchema) });
  const navigate = useNavigate();
  const [joinError, setJoinError] = useState<string>("");

  const join = ({ email, password }: AuthSchema) => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/users/create`, {
        email,
        password,
      })
      .then((res) => res.data)
      .then(() => {
        reset();
        navigate("/auth");
      })
      .catch((error) => {
        console.log(error);
        setJoinError(error.response.data.details);

        if (error.response.status === 409) {
          reset();
        }
      });
  };

  return (
    <section>
      <h1>Join</h1>

      <form onSubmit={handleSubmit(join)}>
        <div>
          <label htmlFor="email">아이디</label>
          <input type="text" id="email" {...register("email")} />
          {errors.email?.message && <p>{errors.email?.message}</p>}
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password?.message && <p>{errors.password?.message}</p>}
        </div>

        {joinError && <p>{joinError}</p>}

        <div>
          <button type="submit" disabled={!isDirty || !isValid}>
            회원가입
          </button>
        </div>
      </form>
    </section>
  );
};

export default JoinPage;
