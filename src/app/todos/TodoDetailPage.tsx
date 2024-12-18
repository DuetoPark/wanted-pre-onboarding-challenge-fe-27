import Section from "../../components/layout/Section";
import TodoDetail from "../../features/todos/components/detailSection/TodoDetail";

const TodoDetailPage = () => {
  return (
    <>
      <Section.Title title="💫 할 일 상세" />
      <TodoDetail />
    </>
  );
};

export default TodoDetailPage;
