import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { GoPlus } from "react-icons/go";
import { TODO_URL } from "../../constants/url";
import Section from "../../../../shared/components/layout/Section";
import Button from "../../../../shared/components/ui/Button";

const TodoListTitle = () => {
  const navigate = useNavigate();

  const goToNew = () => {
    navigate(TODO_URL.NEW);
  };

  return (
    <Section.Title title="🚀 할 일 목록" css={headerStyle}>
      <Button variant="primary" onClick={goToNew}>
        <GoPlus aria-hidden />
        일정 추가
      </Button>
    </Section.Title>
  );
};

export default TodoListTitle;

const headerStyle = css`
  justify-content: space-between;
`;
