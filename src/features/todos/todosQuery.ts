import { queryOptions } from "@tanstack/react-query";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "./apis/todo";
import type { TodoPayloadType } from "./todo";

export const todoQueries = {
  all: () => ["todos"] as const,
  lists: () => [...todoQueries.all(), "list"] as const,
  list: (queryString?: string | null) => {
    return queryOptions({
      queryKey: [...todoQueries.lists(), queryString],
      queryFn: async () => getTodos(queryString),
    });
  },

  details: () => [...todoQueries.all(), "detail"] as const,
  detail: (id?: string) =>
    queryOptions({
      queryKey: [...todoQueries.details(), id],
      queryFn: () => getTodoById(id),
    }),
};

interface IUpdateFuncParams {
  id: string;
  payload: TodoPayloadType;
}

export const todoMutations = {
  delete: () => ({
    mutationFn: async (id: string) => deleteTodo(id),
  }),
  create: () => ({
    mutationFn: async (payload: TodoPayloadType) => createTodo(payload),
  }),
  update: () => ({
    mutationFn: async ({ id, payload }: IUpdateFuncParams) =>
      updateTodo(id, payload),
  }),
};
