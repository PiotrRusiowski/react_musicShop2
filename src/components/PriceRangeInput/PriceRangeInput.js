import React, { useContext } from "react";
import RootContext from "../../context/context";
import "./PriceRangeInput.css";
import styled from "styled-components";

const StyledPriceInputWrapper = styled.div`
  display: flex;

  align-items: center;
  height: 30px;
  @media (max-width: 426px) {
    margin: 0px 25px;
  }
`;
const StyledPriceInput = styled.input``;
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
