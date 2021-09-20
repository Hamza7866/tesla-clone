import React from "react";
import styled from "styled-components";

const Alert = () => {
  return (
    <MainAlert>
      <p>Read Tesla's 2020 Impact Report</p>
    </MainAlert>
  );
};

export default Alert;

const MainAlert = styled.div`
  text-align: center;
  background-color: #fff;
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: underline;
`;
