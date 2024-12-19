export type PriorityType = "urgent" | "normal" | "low";

export interface TodoType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  priority: PriorityType;
}

export interface TodoPayloadType {
  title: string;
  content: string;
  priority: PriorityType;
}
