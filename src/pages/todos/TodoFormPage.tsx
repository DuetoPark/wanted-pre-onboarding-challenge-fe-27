import { useParams } from "react-router-dom";
import Section from "../../shared/components/layout/Section";
import TodoForm from "../../features/todos/components/formSection/TodoForm";

const TodoFormPage = () => {
  const { todoId } = useParams();

  return (
    <>
      <Section.Title title={`🤔 할 일 ${todoId ? "수정" : "등록"}`} />
      <TodoForm />
    </>
  );
};

export default TodoFormPage;
