import React, { useContext } from "react";
import "./Home.css";
import RootContext from "../../context/context";
import phone from "../../assets/icons/footer/phone.svg";
import fb from "../../assets/icons/footer/facebook.svg";
import email from "../../assets/icons/footer/email.svg";
import Button from "../../components/styledComponents/Button";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import ProdutcsList from "../../components/ProdutcsList/ProdutcsList";
import downArrow from "../../assets/icons/down-arrow.svg";
import ArrowButton from "../../components/styledComponents/ArrowButton";
import Arrow from "../../components/styledComponents/Arrow";
import { animateScroll as scroll } from "react-scroll";

const StyledBaner = styled.div`
  height: 75vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  ${({ mobile }) =>
    mobile &&
    css`
      @media (max-width: 710px) {
        overflow: hidden;
      }
    `}
`;
const StyledBanerImg = styled.img`
  overflow: hidden;
  width: 100%;
  height: 100%;
  animation: img 8s;
  z-index: -99;
  position: absolute;

  ${({ mobile }) =>
    mobile &&
    css`
      @media (max-width: 710px) {
        width: auto;
      }
    `}
`;

const StyledBanerItem = styled.div`
  /* position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%); */

  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.5);
  /* background-color: rgba(0, 0, 0, 0.5); */
  width: 100vw;
  padding: 20px;
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

const StyledHome = styled.div`
  width: 100vw;
`;
const StyledPopularSection = styled.div`
  background-color: ${({ theme }) => theme.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  width: 100%;
`;

const StyledPopularSectionWrapper1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const StyledArrowButtonWrapper = styled.div`
  /* border: 2px solid black; */

  cursor: pointer;
  z-index: 100;
  position: fixed;
  width: 80%;
  right: 10%;
  bottom: 2%;
  border-radius: 5px;
  padding: 5px 10px;
  display: "none";
  justify-content: center;
  align-items: center;
  display: ${({ isDownVisible }) => (isDownVisible ? "flex" : "none")};
  background-color: yellow;
  :hover {
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.75);
  }
`;
const boxShadow = "0px 5px 15px 0px rgba(0, 0, 0, 0.75)";
const bgc = "white";
const StyledArrowButtonContent = styled.h1`
  padding: 5px 70px;
`;

const Home = () => {
  const context = useContext(RootContext);
  const { banerImg, popularTodayArray, isScrollDownArrowVisible } = context;

  return (
    <>
      <StyledHome>
        <StyledBaner mobile>
          <StyledBanerImg mobile src={banerImg} alt="audio" />
          <Fade delay={1000}>
            <StyledArrowButtonWrapper
              onClick={() => scroll.scrollToBottom()}
              isDownVisible={isScrollDownArrowVisible}
            >
              <Arrow sale src={downArrow} />
              <Arrow sale src={downArrow} />
              <StyledArrowButtonContent>
                Last Day Sale -30%
              </StyledArrowButtonContent>
              <Arrow sale src={downArrow} />
              <Arrow sale src={downArrow} />
              {/* <ArrowButton scrollDownButton> */}

              {/* </ArrowButton> */}
            </StyledArrowButtonWrapper>

            <StyledBanerItem>
              <Fade big delay={2000}>
                <StyledBanerTitle>Tech.Music</StyledBanerTitle>
                <StyledTitleSmall>authorized shop</StyledTitleSmall>
                {/* <Link to="/products">
                  <Button>Products</Button>
                </Link> */}
              </Fade>
              {/* <StyledArrowButtonWrapper> */}

              {/* </StyledArrowButtonWrapper> */}
            </StyledBanerItem>
          </Fade>
        </StyledBaner>
        <StyledPopularSection>
          <StyledPopularSectionWrapper1>
            <Link to="/products">
              <Button>Click to see all produtsc</Button>
            </Link>
          </StyledPopularSectionWrapper1>

          <Fade left delay={200}>
            <ProdutcsList
              product={popularTodayArray}
              boxShadow={boxShadow}
              bgc={bgc}
            />
          </Fade>
        </StyledPopularSection>
      </StyledHome>
    </>
  );
};
export default Home;
