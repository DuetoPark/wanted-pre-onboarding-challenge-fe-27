import { css } from "@emotion/react";
import Button from "./button/BaseButton";
import RadioInputField from "./form/RadioInputField";
import { PRIORITY_RADIO_FIELD } from "../../features/todos/constants/todos";
import type { IFilter } from "../../features/todos/components/listSection/TodoListSection";

export interface IFilterProps {
  reset: () => void;
  filter: IFilter;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ reset, filter, onChange }: IFilterProps) => {
  return (
    <section>
      <h3 className="visually-hidden">필터</h3>

      <RadioInputField
        label="긴급도"
        name="priorityFilter"
        css={fieldStyle}
        radioFields={PRIORITY_RADIO_FIELD}
        checkedValue={filter.priorityFilter}
        onChange={onChange}
      />

      <RadioInputField
        label="정렬"
        name="sort"
        css={fieldStyle}
        radioFields={[
          { value: "priority", text: "긴급도" },
          { value: "createdAt", text: "생성일" },
          { value: "updatedAt", text: "수정일" },
        ]}
        checkedValue={filter.sort}
        onChange={onChange}
      />

      <RadioInputField
        label="순서"
        name="order"
        css={fieldStyle}
        radioFields={[
          { value: "asc", text: "오름차순" },
          { value: "desc", text: "내림차순" },
        ]}
        checkedValue={filter.order}
        onChange={onChange}
      />

      <Button variant="secondary" onClick={reset} value="reset">
        필터 초기화
      </Button>
    </section>
  );
};

export default Filter;

// styles
const fieldStyle = css`
  display: flex;
  align-items: center;
  column-gap: 16px;
  row-gap: 4px;
`;
