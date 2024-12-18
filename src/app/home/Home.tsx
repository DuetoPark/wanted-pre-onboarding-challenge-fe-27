import { css } from "@emotion/react";
import Layout from "../../components/layout/Layout";
import Tag from "../../components/ui/Tag";

const Home = () => {
  return (
    <Layout>
      <section css={welcomeStyle}>
        <h2>🔥어서오세용🔥</h2>
        <p>
          여기는
          <Tag color="gold">멋진 프론트엔드 개발자 박인혜</Tag>가 만든
          <Tag color="gold">투두 리스트 페이지</Tag>
          입니다.
        </p>
        <p>기다리고 있었습니다. 극진히 모시겠습니다.</p>
        <span aria-hidden>٩(๑❛ʚ❛๑)۶</span>
      </section>
    </Layout>
  );
};

export default Home;

// styles
const welcomeStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  padding: 48px 0;
  margin: 48px 0;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  background-color: #efefef;
  border-radius: 16px;

  h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
  }
`;
