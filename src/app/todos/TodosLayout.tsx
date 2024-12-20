import { Outlet } from "react-router-dom";
import { css } from "@emotion/react";
import Layout from "../../components/layout/Layout";
import Section from "../../components/layout/Section";
import TodoListTitle from "../../features/todos/components/listSection/TodoListTitle";
import TodoListSection from "../../features/todos/components/listSection/TodoListSection";
import Hr from "../../components/ui/Hr";

const TodosLayout = () => {
  return (
    <Layout>
      <h2 className="visually-hidden">투두 리스트 페이지</h2>

      <div css={contentStyle}>
        <Section css={sectionStyle}>
          <TodoListTitle />
          <Hr
            css={css`
              margin: 12px 0;
            `}
          />
          <TodoListSection />
        </Section>

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

const sectionStyle = css`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 16px;
`;
