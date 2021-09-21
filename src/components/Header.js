import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [bugerToggle, setBugerToggle] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        <a href="">Model S</a>

        <a href="">Model 3</a>

        <a href="">Model X</a>

        <a href="">Model Y</a>
        <a href="">Solar Roof</a>
        <a href="">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">TESLA ACCOUNT</a>
        <CustomIcon
          onClick={() => setBugerToggle((bugerToggle) => !bugerToggle)}
        >
          <MenuIcon />
        </CustomIcon>
      </RightMenu>
      <Burger show={bugerToggle}>
        <CustomClose
          onClick={() => setBugerToggle((bugerToggle) => !bugerToggle)}
        >
          <CloseIcon />
        </CustomClose>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade-in</a>
        </li>
        <li>
          <a href="">Cybertruck</a>
        </li>
        <li>
          <a href="">Roadastar</a>
        </li>
        <li>
          <a href="">Semi</a>
        </li>
      </Burger>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 6vh;
  position: fixed;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 200px;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  margin-left: 300px;
  a {
    font-weight: 600;
    padding-left: 15px;
    text-transform: uppercase;
  }
  @media (max-width: 760px) {
    margin-left: 300px;
  }
  @media (max-width: 500px) {
    margin-left: 100px;
  }
`;

const CustomIcon = styled(MenuIcon)`
  cursor: pointer;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Burger = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  li {
    border-bottom: 1px solid black;
    padding: 15px 0;
    font-weight: 600;
  }
  display: ${(props) => (props.show ? "block" : "none")};
`;
const CustomClose = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
