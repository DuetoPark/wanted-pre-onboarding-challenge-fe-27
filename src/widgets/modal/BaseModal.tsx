import ModalOverlay from "./ModalOverlay";
import ModalClose from "./ModalClose";
import ModalTrigger from "./ModalTrigger";
import ModalPortal from "./ModalPortal";
import ModalContent from "./ModalContent";
import ModalProvider from "./providers/ModalProvider";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

Modal.Root = Modal;
Modal.Portal = ModalPortal;
Modal.Content = ModalContent;
Modal.Trigger = ModalTrigger;
Modal.Close = ModalClose;
Modal.Overlay = ModalOverlay;
export default Modal;
