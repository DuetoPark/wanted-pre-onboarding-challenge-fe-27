import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { todoQueries } from "../../todosQuery";
import { TODO_URL } from "../../constants/url";
import TodoList from "./TodoList";
import SearchBar from "../../../../components/ui/SearchBar";
import Hr from "../../../../components/ui/Hr";
import Filter from "../../../../components/ui/Filter";
import type { PriorityType } from "../../todo";
import { useTodoFilter } from "../../hooks/useTodoFilter";
import { css } from "@emotion/react";

export interface IFilter {
  priorityFilter: PriorityType | null;
  sort: "createdAt" | "updatedAt" | "priority" | null;
  order: "asc" | "desc" | null;
}

const TodoListSection = () => {
  const {
    filter,
    queryString,
    keyword,
    updateKeyword,
    resetFilter,
    searchTodo,
    handleFilter,
  } = useTodoFilter();

  const {
    data: todos,
    isLoading,
    isError,
    error,
  } = useQuery(todoQueries.list(queryString));
  const navigate = useNavigate();

  const goToDetail = (id: string) => {
    navigate(TODO_URL.DETAIL(id));
  };

  return (
    <>
      <SearchBar
        name="keyword"
        value={keyword}
        placeholder="검색어를 입력하세요"
        onSubmit={searchTodo}
        onInput={updateKeyword}
      />

      <Filter reset={resetFilter} filter={filter} onChange={handleFilter} />

      <Hr
        css={css`
          margin: 12px 0;
        `}
      />

      <TodoList
        todos={todos}
        isLoading={isLoading}
        isError={isError}
        error={error}
        onClick={goToDetail}
      />
    </>
  );
};

export default TodoListSection;
