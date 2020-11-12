import React from "react";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import { useContext } from "react";
import RootContext from "../context/context";
import ArrowButton from "../components/styledComponents/ArrowButton";
import upArrow from "../assets/icons/up-arrow.svg";
import { animateScroll as scroll } from "react-scroll";
import Arrow from "../components/styledComponents/Arrow";

const MainTemplate = ({ children }) => {
  const context = useContext(RootContext);
  const { isScrollUpArrowVisible } = context;

  return (
    <>
      <Navbar />
      <ArrowButton
        scrollButton
        isVisible={isScrollUpArrowVisible}
        onClick={() => scroll.scrollToTop()}
      >
        <Arrow alt="go back" src={upArrow} />
      </ArrowButton>
      {children}
    </>
  );
};

export default MainTemplate;
