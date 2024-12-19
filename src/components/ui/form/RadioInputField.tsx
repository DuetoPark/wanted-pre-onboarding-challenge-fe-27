import { css } from "@emotion/react";
import type { IRadioField, TInputAttrType } from "./form";

interface IRadioInputFieldProps<T> extends Omit<TInputAttrType, "name"> {
  radioFields: IRadioField<T>[];
  name: string;
  checkedValue: T;
  label: string;
}

const RadioInputField = <T,>({
  radioFields,
  name,
  checkedValue,
  label,
  ...props
}: IRadioInputFieldProps<T>) => {
  return (
    <article css={fieldStyle}>
      <h5 css={titleStyle}>{label}</h5>

      {radioFields.map(({ value, text }, i) => (
        <div css={[radioStyle, checkedStyle]} key={String(value)}>
          <input
            className="visually-hidden"
            type="radio"
            id={`${name}-${i}`}
            name={name}
            value={String(value)}
            checked={checkedValue === value}
            {...props}
          />
          <label htmlFor={`${name}-${i}`}>{text}</label>
        </div>
      ))}
    </article>
  );
};

export default RadioInputField;

// styles
const fieldStyle = css`
  margin: 4px 0;
`;

const titleStyle = css`
  display: inline-block;
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

const radioStyle = css`
  label {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 6px;
    height: 40px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      &::before {
        border-color: #646cff;
      }

      &::after {
        background-color: #646cff;
      }
    }
  }

  label::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #ddd;
    transition: all 150ms ease-in-out;
  }

  label::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 3px;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ddd;
    transform: translateY(-50%);
    transition: all 150ms ease-in-out;
  }
`;

const checkedStyle = css`
  input:checked + label {
    &::before {
      border-color: #646cff;
    }

    &::after {
      background-color: #646cff;
    }
  }
`;
