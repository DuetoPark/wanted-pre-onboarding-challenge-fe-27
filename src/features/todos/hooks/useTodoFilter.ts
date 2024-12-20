import { useCallback, useState } from "react";
import { IFilter } from "../components/listSection/TodoListSection";

const url = new URL(import.meta.env.VITE_BASE_URL);

const initFilter = {
  priorityFilter: null,
  sort: null,
  order: null,
};

const initKeyword = "";

export const useTodoFilter = () => {
  const [filter, setFilter] = useState<IFilter>(initFilter);
  const [queryString, setQueryString] = useState<string | null>(null);
  const [keyword, setKeyword] = useState<string>(initKeyword);

  const updateKeyword = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setKeyword(value);
  }, []);

  const resetFilter = useCallback(() => {
    setFilter(initFilter);
    setQueryString(null);
  }, []);

  const searchTodo = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // queryString 변경
      url.searchParams.set("keyword", keyword);
      setQueryString(url.search);
    },
    [keyword, url]
  );

  const handleFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    // filter 값 변경
    setFilter((prev) => ({ ...prev, [name]: value }));

    // queryString 변경
    url.searchParams.set(name, value);
    setQueryString(url.search);
  }, []);

  return {
    filter,
    queryString,
    keyword,
    updateKeyword,
    resetFilter,
    searchTodo,
    handleFilter,
  };
};
