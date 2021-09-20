import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
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
        <CustomIcon>
          <MenuIcon />
        </CustomIcon>
      </RightMenu>
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
  /* justify-content: space-around; */
  align-items: center;
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
  margin-left: 70px;
  a {
    font-weight: 600;
    padding-left: 15px;
    text-transform: uppercase;
  }
`;

const CustomIcon = styled(MenuIcon)`
  cursor: pointer;
`;
