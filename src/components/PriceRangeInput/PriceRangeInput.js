import React, { useContext } from "react";
import RootContext from "../../context/context";
import "./PriceRangeInput.css";
const PriceRangeInput = () => {
  const context = useContext(RootContext);
  const { maxValue, minValue, priceValue, filterMenager } = context;
  return (
    <>
      <div className="priceInput__wrapper">
        <input
          type="range"
          id="priceInput__input"
          name="priceInput"
          min={minValue}
          max={maxValue}
          value={priceValue}
          onChange={filterMenager}
        />

        <label htmlFor="priceInput" className="priceInput__label">
          <p className="priceInput__price">Price:{priceValue}$</p>
        </label>
      </div>
      {/* <input type="text" type="range" className="slider" /> */}
    </>
  );
};
export default PriceRangeInput;
