import { ButtonHTMLAttributes } from "react";
import { useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import classNames from "classnames";
import PriorityTag from "../PriorityTag";
import type { PriorityTextType, PriorityType } from "../../todo";

type ButtonAttrProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface ITodoItem extends Omit<ButtonAttrProps, "id" | "title"> {
  id: string;
  title: string;
  priority: PriorityType;
  priorityText: PriorityTextType;
}

const TodoItem = ({
  id,
  title,
  priority,
  priorityText,
  onClick,
}: ITodoItem) => {
  const pathname = useLocation().pathname;

  return (
    <li
      css={listItemStyle}
      className={classNames(pathname.includes(id) && "active")}
    >
      <button css={buttonStyle} onClick={onClick}>
        {title} <PriorityTag priority={priority} label={priorityText} />
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
