import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import RootContext from "../../context/context";
import Cart from "../Cart/Cart";
import cartIcon from "../../assets/icons/cartIcon.svg";
import logo from "../../assets/icons/logo_ready3.png";
import styled, { css } from "styled-components";
import HamburgerMenu from "react-hamburger-menu";

const StyledNavbarNavLink = styled(NavLink)`
  font-weight: normal;
  font-size: 15px;
  letter-spacing: 3px;
  text-decoration: none;
  color: rgb(211, 197, 197);
  position: relative;
  padding: 8px 0;
  :hover {
    color: white;
  }
  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  :hover:after {
    width: 140%;
    left: -20%;
  }

  &.active {
    &:after {
      color: white;
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 1px;
      left: 50%;
      transform: translate(-50%);
      position: absolute;
      background: #fff;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 140%;
    }
  }
`;

const StyledNavbar = styled.div``;

const StyledNavbarWrapper = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0, 0, 0);
`;
const StyledLogo = styled.img`
  height: 60px;
  width: 160px;
  margin: 4px 0px 4px -5px;
  @media (max-width: 321px) {
    display: none;
  }
`;
const StyledNavbarList = styled.ul`
  margin-top: 6px;
  display: flex;
  align-items: center;
  list-style: none;

  @media (max-width: 710px) {
    display: none;
  }
`;
const StyledNavbarListElement = styled.li`
  margin: 0 20px 0 20px;
  padding: 10px 0;
  position: relative;
  z-index: 100;
`;
const StyledCard = styled.button`
  position: relative;
  background-color: white;
  border-radius: 10%;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border: none;
  outline: none;
  transition: 0.3s;
  margin: 10px 0 10px 10px;
  ${({ hamburgerCart }) =>
    hamburgerCart &&
    css`
      @media (max-width: 426px) {
        margin-left: 25px;
        width: 40px;
        height: 40px;
      }
      @media (min-width: 712px) {
        display: none;
      }
      @media (min-width: 424px) {
      }
    `};
`;
const StyledCardImg = styled.img`
  position: absolute;
  z-index: 22;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  @media (max-width: 712px) {
    width: 30px;
    height: 30px;
  }
`;
const StyledCardCounter = styled.p`
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -60%);
  font-size: 14px;
  color: black;
  @media (max-width: 712px) {
    font-size: 18px;
  }
`;

const StyledHamburgerMenu = styled(HamburgerMenu)`
  margin-right: 25px;
  @media (min-width: 712px) {
    display: none;
  }

  @media (max-width: 426px) {
    margin-right: -80px;
  }
  @media (max-width: 376px) {
    margin-right: 25px;
  }
`;

const StyledHamburgerMenuLinksWrapper = styled.ul`
  background-color: rgb(0, 0, 0);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-top: 0px;
  padding-top: 0px;
  height: ${({ isOpen }) => (isOpen ? "250px" : "0")};
  transition: all 0.3s ease-in-out;
`;

const StyledHamburgerMenuLi = styled.li`
  margin: 10px 0;
  width: 100vw;
  display: flex;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  transition-delay: 0.5s;
`;

const Navbar = () => {
  const context = useContext(RootContext);
  const {
    handleCartOpen,
    cartCounter,
    isHamburgerMenuOpen,
    handleHamburgerMenuOpen,
  } = context;

  return (
    <>
      <StyledNavbar>
        <StyledNavbarWrapper>
          <div className="container">
            <StyledLogo src={logo} />
          </div>
          <StyledCard hamburgerCart onClick={handleCartOpen}>
            <StyledCardImg img src={cartIcon} alt="cart" />
            <StyledCardCounter>{cartCounter}</StyledCardCounter>
          </StyledCard>

          <StyledHamburgerMenu
            isOpen={isHamburgerMenuOpen}
            menuClicked={handleHamburgerMenuOpen}
            width={28}
            height={22}
            strokeWidth={3}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.3}
          />

          <div className="container">
            <StyledNavbarList>
              <StyledNavbarListElement>
                <StyledNavbarNavLink exact to="/">
                  Home
                </StyledNavbarNavLink>
              </StyledNavbarListElement>
              <StyledNavbarListElement>
                <StyledNavbarNavLink exact to="/products">
                  Products
                </StyledNavbarNavLink>
              </StyledNavbarListElement>

              <StyledNavbarListElement>
                <StyledNavbarNavLink exact to="/about">
                  About
                </StyledNavbarNavLink>
              </StyledNavbarListElement>
              <StyledNavbarListElement>
                <StyledNavbarNavLink exact to="/contact">
                  Contact
                </StyledNavbarNavLink>
              </StyledNavbarListElement>

              <li>
                <StyledCard onClick={handleCartOpen}>
                  <StyledCardImg img src={cartIcon} alt="cart" />
                  <StyledCardCounter>{cartCounter}</StyledCardCounter>
                </StyledCard>
              </li>
              <li>
                <Cart />
              </li>
            </StyledNavbarList>
          </div>
        </StyledNavbarWrapper>
        <StyledHamburgerMenuLinksWrapper isOpen={isHamburgerMenuOpen}>
          <StyledHamburgerMenuLi isVisible={isHamburgerMenuOpen}>
            {isHamburgerMenuOpen ? (
              <StyledNavbarNavLink exact to="/">
                Home
              </StyledNavbarNavLink>
            ) : (
              ""
            )}
          </StyledHamburgerMenuLi>
          <StyledHamburgerMenuLi isVisible={isHamburgerMenuOpen}>
            {isHamburgerMenuOpen ? (
              <StyledNavbarNavLink exact to="/products">
                Products
              </StyledNavbarNavLink>
            ) : (
              ""
            )}
          </StyledHamburgerMenuLi>

          <StyledHamburgerMenuLi isVisible={isHamburgerMenuOpen}>
            {isHamburgerMenuOpen ? (
              <StyledNavbarNavLink exact to="/about">
                About
              </StyledNavbarNavLink>
            ) : (
              ""
            )}
          </StyledHamburgerMenuLi>
          <StyledHamburgerMenuLi isVisible={isHamburgerMenuOpen}>
            {isHamburgerMenuOpen ? (
              <StyledNavbarNavLink exact to="/contact">
                Contact
              </StyledNavbarNavLink>
            ) : (
              ""
            )}
          </StyledHamburgerMenuLi>
        </StyledHamburgerMenuLinksWrapper>
      </StyledNavbar>
    </>
  );
};
export default Navbar;
