import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { LuListTodo } from "react-icons/lu";

const Logo = () => {
  return (
    <h1 css={[logoStyle]}>
      <Link to="/">
        <LuListTodo aria-label="투두 리스트" />
      </Link>
    </h1>
  );
};

export default Logo;

// styles
const logoStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  font-size: 20px;
  border-radius: 50%;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: #efefef;
  }
`;
