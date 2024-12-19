import { IRadioField } from "../../../components/ui/form/form";
import { PriorityType } from "../todo";

export const PRIORITY_TEXT = {
  urgent: "긴급",
  normal: "보통",
  low: "여유",
} as const;

export const PRIORITY_RADIO_FIELD: IRadioField<PriorityType>[] = [
  { value: "urgent", text: PRIORITY_TEXT.urgent },
  { value: "normal", text: PRIORITY_TEXT.normal },
  { value: "low", text: PRIORITY_TEXT.low },
];
