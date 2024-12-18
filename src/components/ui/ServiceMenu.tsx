import { css } from "@emotion/react";
import classNames from "classnames";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface IServiceMenuProps {
  children: React.ReactNode;
  title: string;
}

interface IServiceMenuItemProps {
  path: string;
  text: string;
}

const ServiceMenu = ({ children, title }: IServiceMenuProps) => {
  return (
    <nav>
      <h3 className="visually-hidden">{title}</h3>

      <ul css={[listStyle]}>{children}</ul>
    </nav>
  );
};

const ServiceMenuItem = ({ path, text }: IServiceMenuItemProps) => {
  const pathname = useLocation().pathname;

  return (
    <li
      css={[itemStyle]}
      className={classNames(pathname.includes(path) && "active")}
    >
      <Link to={path}>{text}</Link>
    </li>
  );
};

ServiceMenu.Item = ServiceMenuItem;
export default ServiceMenu;

// styles
const listStyle = css`
  display: flex;
  column-gap: 8px;
  font-size: 14px;
  font-weight: 500;
`;

const itemStyle = css`
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: #efefef;
  }

  &.active {
    color: #646cff;
  }
`;
