import { css } from "@emotion/react";

interface ISectionProps {
  children?: React.ReactNode;
  className?: string;
}

interface ISectionTitleProps extends ISectionProps {
  title: string;
}

const Section = ({ children, className }: ISectionProps) => {
  return <section className={className}>{children}</section>;
};

const SectionTitle = ({ children, className, title }: ISectionTitleProps) => {
  return (
    <header css={titleStyle} className={className}>
      <h3>{title}</h3>
      {children}
    </header>
  );
};

Section.Title = SectionTitle;
export default Section;

// styles
const titleStyle = css`
  display: flex;
  align-items: center;
  min-height: 52px;
  padding: 8px;
  border-radius: 8px;
  background-color: #efefef;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }
`;
