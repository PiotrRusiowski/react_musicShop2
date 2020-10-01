import React, { useContext } from "react";
import SearchInput from "../SearchInput/SearchInput";
import CategoryFilter from "./CategoryFilter";
import PriceRangeInput from "../PriceRangeInput/PriceRangeInput";
import styled, { css } from "styled-components";

const StyledProductsFilterMenu = styled.div`
  display: flex;
  background-color: #599ef8;
  box-shadow: 10px 0px 10px 0px rgba(0.5, 0, 0, 0.7);
  ${({ mobile }) =>
    mobile &&
    css`
      @media (max-width: 710px) {
        flex-direction: column;
      }
    `}
`;
const StyledCategoryFilterWrapper = styled.div`
  /* width: 105px;
  border-radius: 0px 0px 5px 0px;
  border: 1px solid black;
  background-color: white;
  height: 100%; */
`;
const StyledFilterButton = styled.button`
  background-color: black;
  color: rgb(211, 197, 197);
  font-weight: bold;
  letter-spacing: 3px;
  border: none;
  cursor: pointer;
  border-radius: 0px 0px 5px 0px;
  padding: 0px 5px;
  outline: none;
`;

const ProductsFilterMenu = () => {
  return (
    <>
      <StyledProductsFilterMenu mobile>
        <SearchInput />
        <StyledFilterButton>More filter ></StyledFilterButton>
        {/* <StyledCategoryFilterWrapper>
          <CategoryFilter />
        </StyledCategoryFilterWrapper>

        <PriceRangeInput /> */}
      </StyledProductsFilterMenu>
    </>
  );
};
export default ProductsFilterMenu;
