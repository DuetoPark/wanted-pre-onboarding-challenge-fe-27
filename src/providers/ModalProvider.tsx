import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { IModalContext } from "../components/ui/modal/modal";

const ModalContext = createContext<IModalContext | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
    document.body.classList.add("overflow-hidden");
  }, []);

  const escapeByKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  // 키 닫힘 이벤트
  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener("keydown", escapeByKey);

      return () => {
        document.body.removeEventListener("keydown", escapeByKey);
      };
    }
  }, [isOpen, escapeByKey]);

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
