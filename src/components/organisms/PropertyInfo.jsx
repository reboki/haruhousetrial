import styled from "styled-components";

export const PropertyInfo = () => {
  return (
    <Info>
      <CardGrid>
        <Card>
          <IconImg1 src="train.png" alt="" />
          <h3>アクセス良好！</h3>
          <p>
            新宿駅・東京駅まで電車で30分
            <br />
            ディズニーランドは車で17分
          </p>
        </Card>
        <Card>
          <IconImg2 src="house.png" alt="" />
          <h3>閑静な住宅街の中</h3>
          <p>静かな住宅街でリラックス</p>
        </Card>
        <Card>
          <IconImg3 src="laundry.png" alt="" />
          <h3>長期滞在にぴったり</h3>
          <p>洗濯機やキッチン完備</p>
        </Card>
      </CardGrid>
    </Info>
  );
};

const Info = styled.div`
  background-color: #faf3e0;
  height: 1200px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Card = styled.div`
  margin: 25px 50px;

  &:first-child {
    margin-top: 50px;
  }

  background-color: #fcf8f1; /* カード背景 */
  border: 5px solid #3a2f25; /* 墨色ブラウンの枠線 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 24px 16px;
  text-align: center;
  font-size: 12.5px;
`;

const IconImg1 = styled.img`
  width: 100px;
  height: 120px;
  margin-bottom: 12px;
`;

const IconImg2 = styled.img`
  width: 115px;
  height: 120px;
  margin-bottom: 12px;
`;

const IconImg3 = styled.img`
  width: 125px;
  height: 120px;
  margin-bottom: 12px;
`;
