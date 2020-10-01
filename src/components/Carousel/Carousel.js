import React from "react";
import img1 from "../../assets/images/slider/slider_1.jpg";
import img2 from "../../assets/images/slider/slider_2.jpg";
import img3 from "../../assets/images/slider/slider_3.jpg";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import styled from "styled-components";
import "./SliderLoaderBarColor.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StyledSlider = styled(AutoplaySlider)`
  width: 100%;
  height: 100%;
  margin-left: auto;
  overflow: hidden;
`;

const Slider = () => (
  <StyledSlider play={true} cancelOnInteraction={false} interval={3000}>
    <div data-src={img1} />
    <div data-src={img2} />
    <div data-src={img3} />
  </StyledSlider>
);

export default Slider;
