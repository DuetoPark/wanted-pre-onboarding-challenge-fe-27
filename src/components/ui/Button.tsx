import { css } from "@emotion/react";
import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  asChild?: boolean;
  to?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "medium",
  asChild,
  to,
  children,
  ...props
}: IButtonProps) => {
  if (asChild && to) {
    return (
      <Link
        css={[
          baseButtonStyle,
          buttonVariantStyle[variant],
          buttonSizeStyle[size],
        ]}
        to={to}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      css={[
        baseButtonStyle,
        buttonVariantStyle[variant],
        buttonSizeStyle[size],
      ]}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

// styles
const baseButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition: all 150ms ease-in-out;
`;

const buttonVariantStyle = {
  primary: css`
    background-color: #646cff;
    color: #fff;

    &:hover {
      background-color: #535bf2;
    }
  `,
  secondary: css`
    border: 1px solid #646cff;
    color: #646cff;

    &:hover {
      border: 1px solid #535bf2;
      color: #535bf2;
    }
  `,
};

const buttonSizeStyle = {
  small: css`
    height: 28px;
    padding: 0 4px;
  `,
  medium: css`
    height: 36px;
    padding: 0 8px;
  `,
  large: css`
    height: 40px;
    padding: 0 12px;
  `,
};
