import React from "react";
import styled from "styled-components";

const Section = ({
  title,
  description,
  backgroundImg,
  leftText,
  RightText,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftText}</LeftButton>
          {RightText && <RightButton>{RightText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="../../images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333;
  background-image: url("../../images/model-s.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("../../images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.5;
  color: #333;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animation infinite 1.5s;
  overflow-x: hidden;
  margin-left: 250px;
  @media (max-width: 768px) {
    margin-left: 100px;
  }
`;

const Buttons = styled.div``;
