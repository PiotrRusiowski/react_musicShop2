import React, { useContext } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import RootContext from "../../context/context";
import phone from "../../assets/icons/footer/phone.svg";
import fb from "../../assets/icons/footer/facebook.svg";
import email from "../../assets/icons/footer/email.svg";
import Button from "../../components/styledComponents/Button";
import styled from "styled-components";

const StyledBaner = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
`;
const StyledBanerImg = styled.img`
  width: 100%;
  height: 100%;
  animation: img 8s;
  z-index: -99;
  position: absolute;
  opacity: 0.8;
`;

const StyledBanerItem = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  z-index: 2;
  /* background-color: #599ef8;
opacity: 0.5; */
  width: 40%;
`;
const StyledBanerTitle = styled.h1`
  font-family: "Nanum Gothic", sans-serif;
  font-size: 58px;
  letter-spacing: 3px;
  color: black;
  font-weight: lighter;
  z-index: 5;
  line-height: 0.8;
`;
const StyledTitleSmall = styled.h3`
  font-weight: normal;
`;
const StyledFooter = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 95%;
  right: 25px;
`;

const StyledFooterItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;
const StyledFooterImg = styled.img`
  width: 20px;
`;
const StyledFooterContact = styled.div`
  color: white;
  font-size: 11px;
  font-weight: bold;
  text-decoration: none;
  margin-left: 2px;
`;

const Home = () => {
  const context = useContext(RootContext);
  return (
    <>
      <Navbar />
      <StyledBaner>
        <StyledBanerImg src={context.banerImg} alt="audio" />
        <StyledBanerItem>
          <StyledBanerTitle>Tech.Music</StyledBanerTitle>
          {/* ??? */}
          <StyledTitleSmall>authorized shop</StyledTitleSmall>
          <Button>Products</Button>
        </StyledBanerItem>

        <StyledFooter>
          <StyledFooterItem>
            <StyledFooterImg src={phone} alt="" />
            <StyledFooterContact href="#">(022)123-456-123</StyledFooterContact>
          </StyledFooterItem>
          <StyledFooterItem>
            <StyledFooterImg src={email} alt="" />
            <StyledFooterContact>musicshop122@gmail.com</StyledFooterContact>
          </StyledFooterItem>
          <StyledFooterItem>
            <StyledFooterImg src={fb} alt="" />
          </StyledFooterItem>
        </StyledFooter>
      </StyledBaner>
    </>
  );
};
export default Home;
