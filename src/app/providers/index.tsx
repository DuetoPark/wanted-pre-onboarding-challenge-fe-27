import QueryProvider from "./QueryProvider";
import ToastProvider from "./ToastProvider";
export * from "./router";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <ToastProvider>{children}</ToastProvider>
    </QueryProvider>
  );
};
