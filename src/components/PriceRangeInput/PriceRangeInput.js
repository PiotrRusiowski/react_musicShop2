import React, { useContext } from "react";
import RootContext from "../../context/context";
import "./PriceRangeInput.css";
import styled from "styled-components";
const PriceRangeInput = () => {
  const context = useContext(RootContext);
  const { maxValue, minValue, priceValue, filterMenager } = context;

  const StyledPriceInputWrapper = styled.div`
    display: flex;

    align-items: center;
    height: 30px;
  `;
  const StyledPriceInput = styled.input`
    -webkit-appearance: none;
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
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      width: 20px; /* Set a specific slider handle width */
      height: 20px; /* Slider handle height */
      background: black; /* Green background */
      cursor: pointer; /* Cursor on hover */
      border-radius: 50px;
    }

    ::-moz-range-thumb {
      width: 25px; /* Set a specific slider handle width */
      height: 25px; /* Slider handle height */
      border: none;
      cursor: pointer;
    }
    ::-moz-range-thumb {
      width: 25px; /* Set a specific slider handle width */
      height: 25px; /* Slider handle height */
      border: none;
      cursor: pointer;
    }
  `;
  const StyledPriceInputLabel = styled.label`
    background-color: black;
    /* background-color: rgb(211, 197, 197); */
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

  return (
    <>
      <StyledPriceInputWrapper>
        <StyledPriceInput
          type="range"
          name="priceInput"
          min={minValue}
          max={maxValue}
          value={priceValue}
          onChange={filterMenager}
        />

        <StyledPriceInputLabel htmlFor="priceInput">
          <StyledPriceInputPrice>Price:{priceValue}$</StyledPriceInputPrice>
        </StyledPriceInputLabel>
      </StyledPriceInputWrapper>
      {/* <input type="text" type="range" className="slider" /> */}
    </>
  );
};
export default PriceRangeInput;
