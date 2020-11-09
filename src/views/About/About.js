import React, { useEffect } from "react";
import Slider from "../../components/Carousel/Carousel";
import styled, { css } from "styled-components";
import Title from "../../components/styledComponents/Title";
import Card from "../../components/styledComponents/Card";
import img1 from "../../assets/icons/homeIcons/4k-black-48dp.svg";
import img2 from "../../assets/icons/homeIcons/album-black-48dp.svg";
import img3 from "../../assets/icons/homeIcons/queue_music-black-48dp.svg";
import Fade from "react-reveal/Fade";

const StyledAboutTitle = styled(Title)`
  margin-right: auto;
`;
const StyledAboutWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  justify-content: space-between;
  @media (max-width: 710px) {
    flex-direction: column;
  }
`;
const StyledSliderWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  overflow: hidden;
  ${({ mobile }) =>
    mobile &&
    css`
      @media (max-width: 710px) {
        display: none;
      }
    `}
  ${({ tablet }) =>
    tablet &&
    css`
      @media (min-width: 768px) {
        display: none;
      }
    `}
  @media (max-width: 710px) {
    width: 100%;
  }
`;

const StyledAbout = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  /* background-color: red; */
  flex-direction: column;
  padding: 25px 25px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 710px) {
    width: 100%;
  }
`;
const StyledDescWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledDesc = styled.div`
  flex-basis: 45%;
`;
const StyledAboutWrapper2 = styled.ul`
  justify-content: space-around;
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 40px;
  @media (max-width: 710px) {
    flex-direction: column;
  }
`;
const StyledGrey = styled.div`
  background-color: ${({ theme }) => theme.lightGrey};
`;
const StyledCard = styled(Card)`
  background-color: white;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.75);
  flex-basis: 22%;
  text-align: center;
  @media (max-width: 770px) {
    flex-basis: 30%;
  }
`;
const StyledCardImg = styled.div`
  width: 90%;
  height: 150px;
  background-color: ${({ theme }) => theme.blue};
`;
const StyledCardIcon = styled.img`
  height: 100%;
  width: 100%;
`;

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <Fade delay={300}>
        <StyledSliderWrapper tablet>
          <Slider />
        </StyledSliderWrapper>
        <StyledAboutWrapper>
          <StyledAbout>
            <StyledAboutTitle>About</StyledAboutTitle>
            <StyledDescWrapper>
              <StyledDesc>
                <p>
                  <strong>Weee:</strong>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Accusamus totam quibusdam inventore. Doloribus recusandae eum
                  consectetur quae unde quod <br /> blanditiis.oasdoho
                  soidhaodasdasd
                </p>
                <p>
                  <strong>Adress: </strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  dolor amet repellat quisquam labore natus asperiores incidunt
                  ex, rem, officia quod fugiat porro ipsam cum necessitatibus
                  nihil eveniet. Ut, iusto?
                </p>
                {/* <p>
                <strong>About:</strong>0qo0qw0qw0
              </p>
              <br />
              <p>
                <strong>Adress</strong> asdomoodsam
              </p> */}
              </StyledDesc>
              <StyledDesc>
                <p>
                  <strong>Weee:</strong>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Accusamus totam quibusdam inventore. Doloribus recusandae eum
                  consectetur quae unde quod <br /> blanditiis.oasdoho
                  soidhaodasdasd
                </p>
                <p>
                  <strong>Adress: </strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  dolor amet repellat quisquam labore natus asperiores incidunt
                  ex, rem, officia quod fugiat porro ipsam cum necessitatibus
                  nihil eveniet. Ut, iusto?
                </p>
                {/* <p>
                <strong>About:</strong>0qo0qw0qw0
              </p>
              <br />
              <p>
                <strong>Adress</strong> asdomoodsam
              </p> */}
              </StyledDesc>
            </StyledDescWrapper>
          </StyledAbout>

          <StyledSliderWrapper mobile>
            <Slider />
          </StyledSliderWrapper>
        </StyledAboutWrapper>
        <StyledGrey>
          <div className="container">
            <Fade delay={1000} bottom>
              <StyledAboutWrapper2>
                <StyledCard>
                  <StyledCardImg>
                    <StyledCardIcon src={img1}></StyledCardIcon>
                  </StyledCardImg>

                  <p>
                    <strong>About</strong>
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam commodi maxime iste qui iusto neque, quasi dignissimos,
                    suscipit, consequatur
                  </p>
                </StyledCard>

                <StyledCard>
                  <StyledCardImg>
                    <StyledCardIcon src={img2}></StyledCardIcon>
                  </StyledCardImg>

                  <p>
                    <strong>About</strong>
                  </p>

                  <div className="line2"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam commodi maxime iste qui iusto neque, quasi dignissimos,
                    suscipit, consequatur
                  </p>
                </StyledCard>

                <StyledCard>
                  <StyledCardImg>
                    <StyledCardIcon src={img3}></StyledCardIcon>
                  </StyledCardImg>

                  <p>
                    <strong>About</strong>
                  </p>

                  <div className="line2"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam commodi maxime iste qui iusto neque, quasi dignissimos,
                    suscipit, consequatur
                  </p>
                </StyledCard>
              </StyledAboutWrapper2>
            </Fade>
          </div>
        </StyledGrey>
      </Fade>
    </>
  );
};
export default About;
