import styled from "styled-components";

export const Gallery = () => {
  return (
    <Mallery>
      <HouseImg src="japanese house.jpg" alt="" />
    </Mallery>
  );
};

const Mallery = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #faf3e0;
  height: 300px;
`;

const HouseImg = styled.img`
  width: 310px;
  height: 310px;
`;
