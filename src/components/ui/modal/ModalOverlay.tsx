import { css } from "@emotion/react";
import { useModalContext } from "../../../providers/ModalProvider";
import { useCallback } from "react";

interface IModalOverlayProps {
  onClick?: () => void;
}

const ModalOverlay = ({ onClick }: IModalOverlayProps) => {
  const { closeModal } = useModalContext();

  const handleClick = useCallback(() => {
    closeModal();

    // NOTE: 주입된 클릭 이벤트
    if (onClick) {
      onClick();
    }
  }, [closeModal, onClick]);

  return <div css={overlayStyles} onClick={handleClick} aria-hidden></div>;
};

export default ModalOverlay;

// styles
const overlayStyles = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;
