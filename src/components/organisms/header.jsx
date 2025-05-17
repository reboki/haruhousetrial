import styled from "styled-components";

export const Header = () => {
  return (
    <Head>
      <Title>HARUHOUSE</Title>
      <ReserveButton href="">宿泊予約</ReserveButton>
    </Head>
  );
};

const Head = styled.header`
  padding: 5px 10px 5px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 160px;
  background-color: #faf3e0;
`;

const Title = styled.div`
  color: #556b2f;
`;

const ReserveButton = styled.a`
  font-size: 14px;
  background: #556b2f;
  border-radius: 3px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 250px;
  padding: 5px 5px;
  font-family: "Noto Sans JP", sans-serif;
  color: #f5f5f5;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-weight: 500;

  &:hover {
    background: #445c25;
    color: #fff;
  }

  &:hover::after {
    border-color: #fff;
  }
`;
