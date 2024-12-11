import { css } from "@emotion/react";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div css={layoutStyle} className={className}>
      {children}
    </div>
  );
};

export default Layout;

// styles
const layoutStyle = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8px;
`;
