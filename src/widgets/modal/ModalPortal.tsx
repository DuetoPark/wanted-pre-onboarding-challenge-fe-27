import { createPortal } from "react-dom";
import { useModalContext } from "./providers/ModalProvider";
import { IDefaultModalProps } from "./modal";
const MODAL_ROOT = document.getElementById("modal-root");

const ModalPortal = ({ children }: IDefaultModalProps) => {
  const { isOpen } = useModalContext();

  return <>{isOpen && createPortal(children, MODAL_ROOT || document.body)}</>;
};

export default ModalPortal;
