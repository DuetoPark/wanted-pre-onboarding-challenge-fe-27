import { css } from "@emotion/react";
import BaseTag, { type ITagProps } from "../../../components/ui/tag/BaseTag";
import type { PriorityType } from "../todo";

interface IPriorityTag {
  priority: PriorityType;
  children?: React.ReactNode;
  label?: string;
  className?: string;
}

const setPriorityTagColor = (priority: PriorityType): ITagProps["color"] => {
  switch (priority) {
    case "low":
      return "gray";
    case "normal":
      return "brand";
    case "urgent":
      return "red";
    default:
      return "gold";
  }
};

const PriorityTag = ({
  priority,
  children,
  label,
  className,
}: IPriorityTag) => {
  return (
    <BaseTag
      css={tagStyle}
      color={setPriorityTagColor(priority)}
      className={className}
      label={label}
    >
      {children}
    </BaseTag>
  );
};

export default PriorityTag;

// styles
const tagStyle = css`
  font-size: 12px;
`;
