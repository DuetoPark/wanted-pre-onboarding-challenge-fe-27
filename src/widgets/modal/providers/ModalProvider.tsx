import { createContext, useCallback, useContext, useState } from "react";
import { IModalContext } from "../modal";

const ModalContext = createContext<IModalContext | null>(null);

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within ModalProvider");
  }

  return context;
};
