import { css } from "@emotion/react";
import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  asChild?: boolean;
  to?: string;
  children: React.ReactNode;
}

const Button = ({
  variant,
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
  column-gap: 4px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
`;

const buttonVariantStyle = {
  primary: css`
    background-color: #646cff;
    color: #fff;
  `,
  secondary: css`
    border: 1px solid #646cff;
    color: #646cff;
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
