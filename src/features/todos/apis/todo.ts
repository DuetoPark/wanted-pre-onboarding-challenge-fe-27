import { axiosRequest } from "../../../shared/axios/request";
import { formatDate, formatTime } from "../../../shared/utils/date";
import { PRIORITY_TEXT } from "../constants/todos";
import type { TodoPayloadType, TodoType } from "../todo";

export const getTodos = async () => {
  return await axiosRequest
    .get<TodoType[]>("/todos") //
    .then((res) =>
      res.map((item) => ({
        ...item,
        priorityText: PRIORITY_TEXT[item.priority],
      }))
    );
};

export const getTodoById = async (todoId?: string) => {
  if (!todoId) return null;

  return await axiosRequest
    .get<TodoType>(`/todos/${todoId}`) //
    .then((res) => ({
      ...res,
      createdAt: `${formatDate(res.createdAt)} ${formatTime(res.createdAt)}`,
      updatedAt: `${formatDate(res.updatedAt)} ${formatTime(res.updatedAt)}`,
      priorityText: PRIORITY_TEXT[res.priority],
    }));
};

export const createTodo = async (payload: TodoPayloadType) => {
  return await axiosRequest.post<TodoPayloadType, TodoType>("/todos", payload);
};

export const updateTodo = async (todoId: string, payload: TodoPayloadType) => {
  return await axiosRequest.update<TodoPayloadType, TodoType>(
    `/todos/${todoId}`,
    payload
  );
};

export const deleteTodo = async (todoId: string) => {
  return await axiosRequest.delete(`/todos/${todoId}`);
};
