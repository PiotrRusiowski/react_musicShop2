import React, { useContext } from "react";
import RootContext from "../../context/context";
const PriceRangeInput = () => {
  const context = useContext(RootContext);
  const { maxValue, minValue, priceValue, filterMenager } = context;
  return (
    <div>
      <label htmlFor="priceInput">
        <p>
          product price: <span>{priceValue}$</span>
        </p>
      </label>
      <input
        type="range"
        id="priceInput"
        name="priceInput"
        min={minValue}
        max={maxValue}
        value={priceValue}
        onChange={filterMenager}
      />
    </div>
  );
};
export default PriceRangeInput;
