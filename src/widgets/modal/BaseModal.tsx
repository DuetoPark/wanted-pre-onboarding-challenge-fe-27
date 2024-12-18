import ModalOverlay from "./ModalOverlay";
import ModalClose from "./ModalClose";
import ModalTrigger from "./ModalTrigger";
import ModalPortal from "./ModalPortal";
import ModalContent from "./ModalContent";
import ModalProvider from "./providers/ModalProvider";

/**
 * 
 * Modal 컴포넌트
 * 
 * 특징
 * 1. 재사용성: 자유롭게 조립 가능
 * 2. 응집도: CCP 패턴으로 Modal 관련된 컴포넌트만 분류
 * 3. Portal: React Portal을 통한 DOM 계층 분리
 * 
 * 사용예시
 * <Modal.Root>
    <Modal.Trigger css={css`background-color: red`}>회원가입</Modal.Trigger>
    <Modal.Portal>
      <Modal.Overlay onClick={() => setCurrentStep(1)} />
      <Modal.Content>
        // 이곳을 원하는대로 조립해서 쓰세요
        // ex. <Modal.Close onClick={() => setCurrentStep(1)}>닫기</Modal.Close>
      </Modal.Content>
    </Modal.Portal>
  </Modal.Root>
 * 
 */

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
