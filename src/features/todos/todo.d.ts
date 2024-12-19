import { PRIORITY_TEXT } from "./constants/todos";

export type PriorityType = keyof typeof PRIORITY_TEXT;
export type PriorityTextType =
  (typeof PRIORITY_TEXT)[keyof typeof PRIORITY_TEXT];

export interface TodoType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  priority: PriorityType;
  PriorityText: PriorityTextType;
}

export interface TodoPayloadType {
  title: string;
  content: string;
  priority: PriorityType;
}
