import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Carousel/Carousel";
import "./About.css";
import styled from "styled-components";
import Button from "../../components/styledComponents/Button";

const StyledAboutTitle = styled.h1`
  color: ${({ theme }) => theme.blue};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledAboutButton = styled(Button)`
  background-color: yellow;
`;

const About = () => {
  return (
    <>
      <Navbar />
      <StyledAboutTitle>About</StyledAboutTitle>
      {/* <Button>kliknij</Button>
      <Button isBlue>Kilknij niebieski</Button>
      <Button isDark>Kilknij czarny</Button>
      <StyledAboutButton>Kliknij żółty</StyledAboutButton> */}
      <Slider />
    </>
  );
};
export default About;
