import { useModalContext } from "../../../providers/ModalProvider";
import { IDefaultModalProps } from "./modal";

const ModalTrigger = ({ children, className }: IDefaultModalProps) => {
  const { openModal } = useModalContext();

  return (
    <button className={className} onClick={openModal}>
      {children}
    </button>
  );
};

export default ModalTrigger;
