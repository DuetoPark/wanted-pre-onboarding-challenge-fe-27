import { useForm } from "react-hook-form";
import { AuthPayloadType } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "../schema/auth";
import { useCallback } from "react";

interface IAuthFormProps {
  submitText: string;
  errorMessage: string;
  onPermit: (formData: AuthPayloadType) => void;
}

const AuthForm = ({ submitText, errorMessage, onPermit }: IAuthFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<AuthPayloadType>({ resolver: zodResolver(authSchema) });

  const onSubmit = useCallback(
    (formData: AuthPayloadType) => {
      onPermit(formData);
      reset();
    },
    [onPermit, reset]
  );

  return (
    <form onSubmit={handleSubmit((formData) => onSubmit(formData))}>
      <div>
        <label htmlFor="email">아이디</label>
        <input
          type="text"
          id="email"
          placeholder="아이디"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password?.message}</p>}
      </div>

      {errorMessage && <p>{errorMessage}</p>}

      <div>
        <button type="submit" disabled={!isValid || isSubmitting}>
          {submitText}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
