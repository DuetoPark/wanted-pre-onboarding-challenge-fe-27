import { css } from "@emotion/react";

interface IEditButtonWrapper {
  children: React.ReactNode;
}

const EditButtonsWrapper = ({ children }: IEditButtonWrapper) => {
  return <div css={wrapperStyle}>{children}</div>;
};

export default EditButtonsWrapper;

// styles
const wrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 4px;
  margin-top: 12px;

  button {
    width: 80px;
  }
`;
