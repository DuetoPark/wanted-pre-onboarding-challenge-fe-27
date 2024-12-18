import { css } from "@emotion/react";

interface IHrProps {
  thickness?: keyof typeof hrThicknessStyle;
  className?: string;
}

const Hr = ({ thickness = "thin", className }: IHrProps) => {
  return (
    <hr css={[hrStyle, hrThicknessStyle[thickness]]} className={className} />
  );
};

export default Hr;

// styles
const hrStyle = css`
  color: #ddd;
  background-color: #ddd;
  border: 0;
  width: 100%;
`;

const hrThicknessStyle = {
  thick: css`
    height: 6px;
  `,
  normal: css`
    height: 3px;
  `,
  thin: css`
    height: 1px;
  `,
};
