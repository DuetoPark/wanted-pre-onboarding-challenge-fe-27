import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { authMutations } from "../../features/auth/authQuery";
import { authSchema } from "../../features/auth/schema/auth";
import type { AuthPayloadType } from "../../features/auth/types";

const JoinPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<AuthPayloadType>({ resolver: zodResolver(authSchema) });
  const [joinError, setJoinError] = useState<string>("");

  const { mutate: join } = useMutation({
    ...authMutations.join(),
    onSuccess() {
      location.replace("/auth");
      reset();
    },
    onError(error) {
      const errorMessage =
        error?.response?.data?.details || "이미 존재하는 유저입니다";
      setJoinError(errorMessage);

      if (error?.response?.status === 409) {
        reset();
      }
    },
  });

  return (
    <section>
      <h1>Join</h1>

      <form onSubmit={handleSubmit((formData) => join(formData))}>
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
