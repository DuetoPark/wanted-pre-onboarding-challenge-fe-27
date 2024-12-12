import { css } from "@emotion/react";

interface IEmptyProps {
  children: React.ReactNode;
  className?: string;
}

const Empty = ({ children, className }: IEmptyProps) => {
  return (
    <p css={emptyStyle} className={className}>
      {children}
    </p>
  );
};

export default Empty;

// styles
const emptyStyle = css`
  padding: 48px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: #555;
`;
