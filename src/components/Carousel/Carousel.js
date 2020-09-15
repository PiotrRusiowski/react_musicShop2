import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import img1 from "../../assets/images/slider/slider_1.jpg";
import img2 from "../../assets/images/slider/slider_2.jpg";

import "react-awesome-slider/dist/styles.css";
import styled from "styled-components";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StyledSliderWrapper = styled.div`
  width: 100%;
  height: 80vh;
  margin: 0;
  padding: 15px 0px;
`;
const StyledSlider = styled(AutoplaySlider)`
  width: 50%;
  height: 100%;
  margin: auto;
  overflow: hidden;
`;
const StyledSliderSlide = styled.div`
  background-color: red;
  display: flex;
`;
const StyledSliderSlideH1 = styled.h1`
  font-size: 30px;
`;
const Slider = () => (
  <StyledSliderWrapper>
    <StyledSlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={3000}
    >
      <div data-src={img1} />

      <div data-src={img2} />
    </StyledSlider>
  </StyledSliderWrapper>
);
export default Slider;
