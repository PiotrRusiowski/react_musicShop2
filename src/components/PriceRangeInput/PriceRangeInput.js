import React, { useContext } from "react";
import RootContext from "../../context/context";
import "./PriceRangeInput.css";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const StyledPriceInputWrapper = styled.div`
  display: flex;

  align-items: center;
  height: 30px;
`;
const StyledPriceInput = styled.input`
  /* -webkit-appearance: none;
width: 100%;
height: 10px;
background: white;
border: 1px solid black;
border-radius: 10px;
transition: all 0.3s ease;
:hover {
  -webkit-appearance: none;
}

:active {
  -webkit-appearance: none;
}

:-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: black;
  cursor: pointer;
  border-radius: 50px;
}

::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border: none;
  cursor: pointer;
}
::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border: none;
  cursor: pointer;
} */
`;
const StyledPriceInputLabel = styled.label`
  background-color: black;
  height: 100%;
  border: 1px solid black;
  border-radius: 0px 0px 5px 5px;
  min-width: 120px;
`;
const StyledPriceInputPrice = styled.p`
  padding: 4px 8px;
  color: rgb(211, 197, 197);
  letter-spacing: 1px;
`;

const PriceRangeInput = () => {
  const context = useContext(RootContext);
  const {
    maxValue,
    minValue,
    priceValue,
    filterMenager,
    handlePriceChange,
  } = context;

  return (
    <>
      <StyledPriceInputWrapper>
        <StyledPriceInput
          type="range"
          name="priceInput"
          min={minValue}
          max={maxValue}
          value={priceValue}
          onChange={handlePriceChange}
        />

        <StyledPriceInputLabel htmlFor="priceInput">
          <StyledPriceInputPrice>Price:{priceValue}$</StyledPriceInputPrice>
        </StyledPriceInputLabel>
      </StyledPriceInputWrapper>
    </>
  );
};

export default PriceRangeInput;
