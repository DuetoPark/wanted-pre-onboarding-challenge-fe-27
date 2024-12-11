import { css } from "@emotion/react";
import TodoList from "./TodoList";
import Section from "../../../../shared/components/layout/Section";
import TodoListTitle from "./TodoListTitle";

const TodoListSection = () => {
  return (
    <Section css={sectionStyle}>
      <TodoListTitle />
      <TodoList />
    </Section>
  );
};

export default TodoListSection;

// styles
const sectionStyle = css`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 16px;
`;
