import { css } from "@emotion/react";
import { IDefaultModalProps } from "./modal";

const ModalContent = ({ children, className }: IDefaultModalProps) => {
  return (
    <div css={contentStyle} className={className}>
      {children}
    </div>
  );
};

export default ModalContent;

// styles
const contentStyle = css`
  position: fixed;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform: translate(-50%, -50%);

  & > * {
    width: 100%;
  }

  @media (min-width: 576px) {
    border-radius: 16px;
  }
`;
