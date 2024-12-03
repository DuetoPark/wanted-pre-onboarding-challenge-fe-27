interface TodoUrlType {
  HOME: string;
  NEW: string;
  DETAIL: (id: string) => string;
  MODIFY: (id: string) => string;
}

export const TODO_URL: TodoUrlType = Object.freeze({
  HOME: "/todo",
  NEW: "/todo/new",
  DETAIL: (id: string) => `/todo/${id}`,
  MODIFY: (id: string) => `/todo/${id}/modify`,
});
