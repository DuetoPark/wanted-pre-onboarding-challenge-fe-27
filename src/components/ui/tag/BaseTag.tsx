import { css } from "@emotion/react";

export interface ITagProps {
  children?: React.ReactNode;
  color: keyof typeof tagColorStyle;
  label?: string;
  className?: string;
}

const BaseTag = ({ children, color, label, className }: ITagProps) => {
  if (label) {
    return (
      <strong
        css={[baseTagStyle, tagColorStyle[color]]}
        className={className}
        aria-label={label}
      ></strong>
    );
  }

  return (
    <strong css={[baseTagStyle, tagColorStyle[color]]} className={className}>
      {children}
    </strong>
  );
};

export default BaseTag;

const baseTagStyle = css`
  display: inline-block;
  padding: 4px;
  border-radius: 4px;
  line-height: 1;
  font-weight: 700;
`;

const tagColorStyle = {
  gold: css`
    background-color: gold;
    color: black;
  `,
  gray: css`
    background-color: lightgray;
    color: black;
  `,
  brand: css`
    background-color: #646cff;
    color: white;
  `,
  red: css`
    background-color: tomato;
    color: white;
  `,
};
