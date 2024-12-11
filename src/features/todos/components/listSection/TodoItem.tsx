import { ButtonHTMLAttributes } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import { css } from "@emotion/react";

type ButtonAttrProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface ITodoItem extends Omit<ButtonAttrProps, "id" | "title"> {
  id: string;
  title: string;
}

const TodoItem = ({ id, title, onClick }: ITodoItem) => {
  const pathname = useLocation().pathname;

  return (
    <li
      css={listItemStyle}
      className={classNames(pathname.includes(id) && "active")}
    >
      <button css={buttonStyle} onClick={onClick}>
        {title}
      </button>
    </li>
  );
};

export default TodoItem;

// styles
const listItemStyle = css`
  border-radius: 8px;
  overflow: hidden;
  color: #aaa;
  font-weight: 500;
  font-size: 16px;
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: #efefef;
  }

  &.active {
    color: #646cff;
    font-weight: 700;
  }
`;

const buttonStyle = css`
  width: 100%;
  padding: 8px;
  font-size: inherit;
  font-weight: inherit;
  text-align: left;
`;
