import { css } from "@emotion/react";
import { IoMdClose } from "react-icons/io";
import { useToastContext } from "../../app/providers/ToastProvider";
import { type IToastMessage } from "./toast";

const ToastItem = ({ id, message, type }: IToastMessage) => {
  const { removeToast } = useToastContext();

  return (
    <div css={[toastStyles, toastType[type]]}>
      <p>{message}</p>
      <button type="button" onClick={() => removeToast(id)}>
        <IoMdClose />
      </button>
    </div>
  );
};

export default ToastItem;

// styles
const toastStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 18px;
    transform: translateX(8px);
    transition: background-color 150ms ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.12);
    }
  }
`;

const toastType = {
  info: css`
    background-color: skyblue;
    color: #333;
  `,
  success: css`
    background-color: gold;
    color: #333;
  `,
  error: css`
    background-color: tomato;
    color: #fff;
  `,
};
