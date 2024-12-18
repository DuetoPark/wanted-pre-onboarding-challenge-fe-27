import { css } from "@emotion/react";
import { forwardRef, InputHTMLAttributes } from "react";

type TInputAttrType = InputHTMLAttributes<HTMLInputElement>;

interface ITextInputFieldProps extends Omit<TInputAttrType, "name"> {
  name: string;
  label: string;
}

const TextInputField = forwardRef<HTMLInputElement, ITextInputFieldProps>(
  ({ name, label, ...props }, ref) => {
    return (
      <div css={fieldStyle}>
        <label css={labelStyle} htmlFor={name}>
          {label}
        </label>
        <input
          css={inputStyle}
          type="text"
          ref={ref}
          name={name}
          id={name}
          {...props}
        />
      </div>
    );
  }
);

export default TextInputField;

// styles
const fieldStyle = css`
  margin: 4px 0;
`;

const labelStyle = css`
  display: inline-block;
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

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
