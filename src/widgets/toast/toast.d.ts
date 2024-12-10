export interface IToastMessage {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

export interface IToastContext {
  toastMessages: IToastMessage[];
  showToast: (message: string, type: string) => void;
  removeToast: (id: string) => void;
}
