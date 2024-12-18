import { css } from "@emotion/react";
import { useToastContext } from "../../../providers/ToastProvider";
import ToastItem from "./ToastItem";

const ToastContainer = () => {
  const { toastMessages } = useToastContext();

  return (
    <ul css={[listStyle]}>
      {toastMessages.map((toast) => (
        <li key={toast.id}>
          <ToastItem id={toast.id} message={toast.message} type={toast.type} />
        </li>
      ))}
    </ul>
  );
};

export default ToastContainer;

// styles
const listStyle = css`
  position: fixed;
  left: 16px;
  bottom: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
