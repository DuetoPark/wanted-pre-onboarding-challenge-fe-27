import { css } from "@emotion/react";

interface IAuthMenuProps {
  children: React.ReactNode;
  title: string;
}

const AuthMenu = ({ children, title }: IAuthMenuProps) => {
  return (
    <nav css={[navStyle]}>
      <h3 className="visually-hidden">{title}</h3>

      <ul css={[listStyle]}>{children}</ul>
    </nav>
  );
};

const AuthMenuItem = ({ children }: { children: React.ReactNode }) => {
  return <li>{children}</li>;
};

AuthMenu.Item = AuthMenuItem;
export default AuthMenu;

// styles
const navStyle = css`
  margin-left: auto;
`;

const listStyle = css`
  display: flex;
  column-gap: 8px;
  font-size: 14px;
  font-weight: 500;
`;
