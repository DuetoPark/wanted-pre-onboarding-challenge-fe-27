import { css } from "@emotion/react";

export interface ITagProps {
  children: React.ReactNode;
  color: keyof typeof tagColorStyle;
  className?: string;
}

const Tag = ({ children, color, className }: ITagProps) => {
  return (
    <strong css={[baseTagStyle, tagColorStyle[color]]} className={className}>
      {children}
    </strong>
  );
};

export default Tag;

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
};
