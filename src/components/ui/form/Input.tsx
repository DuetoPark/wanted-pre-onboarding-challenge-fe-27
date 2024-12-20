import { forwardRef } from "react";
import { TInputAttrType } from "./form";
import { css } from "@emotion/react";

/**
 *
 * Input 컴포넌트
 *
 * 특징
 * 일관된 디자인: text type의 input은 모두 동일한 디자인으로 통일
 *
 * 사용 예시
 * <Input ref={ref} name={name} id={name} {...props} />
 */

const Input = forwardRef<HTMLInputElement, TInputAttrType>(
  ({ ...props }, ref) => {
    return <input type="text" css={inputStyle} ref={ref} {...props} />;
  }
);

export default Input;

const inputStyle = css`
  width: 100%;
  height: 40px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 150ms ease-in-out;

  &::placeholder {
    color: #aaa;
  }

  &:hover {
    border-color: #bbb;
  }

  &:focus {
    border-color: #646cff;
  }
`;
