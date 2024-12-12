import { Outlet } from "react-router-dom";
import { css } from "@emotion/react";
import Layout from "../../shared/components/layout/Layout";
import TodoListSection from "../../features/todos/components/listSection/TodoListSection";
import Section from "../../shared/components/layout/Section";

const TodosLayout = () => {
  return (
    <Layout>
      <h2 className="visually-hidden">투두 리스트 페이지</h2>

      <div css={contentStyle}>
        <TodoListSection />

        <Section css={sectionStyle}>
          <Outlet />
        </Section>
      </div>
    </Layout>
  );
};

export default TodosLayout;

// styles
const contentStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 24px 0;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 2fr;
  }
`;

// styles
const sectionStyle = css`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 16px;
`;
