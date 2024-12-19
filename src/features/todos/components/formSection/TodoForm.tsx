import { useTodoForm } from "../../hooks/useTodoForm";
import TextInputField from "../../../../components/ui/form/TextInputField";
import Button from "../../../../components/ui/Button";
import EditButtonsWrapper from "../EditButtonsWrapper";
import { PRIORITY_RADIO_FIELD } from "../../constants/todos";
import RadioInputField from "../../../../components/ui/form/RadioInputField";

const TodoForm = () => {
  const {
    formState,
    titleRef,
    contentRef,
    cancel,
    handleChange,
    handleSubmit,
    todoId,
  } = useTodoForm();
  return (
    <form action="">
      <TextInputField
        ref={titleRef}
        value={formState.title}
        name="title"
        label="제목"
        placeholder="제목을 입력하세요"
        onInput={handleChange}
      />

      <TextInputField
        ref={contentRef}
        value={formState.content}
        name="content"
        label="내용"
        placeholder="내용을 입력하세요"
        onInput={handleChange}
      />

      <RadioInputField
        name="priority"
        radioFields={PRIORITY_RADIO_FIELD}
        checkedValue={formState.priority}
        onChange={handleChange}
        label="긴급도"
      />

      <EditButtonsWrapper>
        <Button onClick={handleSubmit}>{todoId ? "수정" : "등록"}</Button>
        <Button variant="secondary" onClick={cancel}>
          취소
        </Button>
      </EditButtonsWrapper>
    </form>
  );
};

export default TodoForm;
