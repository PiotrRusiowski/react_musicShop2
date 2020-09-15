import React, { useContext } from "react";
import SearchInput from "../SearchInput/SearchInput";
import CategoryFilter from "./CategoryFilter";
import PriceRangeInput from "../PriceRangeInput/PriceRangeInput";
import styled from "styled-components";

const StyledProductsFilterMenu = styled.div`
  display: flex;
  background-color: #599ef8;
  box-shadow: 10px 0px 10px 0px rgba(0.5, 0, 0, 0.7);
`;
const ProductsFilterMenu = () => {
  return (
    <>
      <StyledProductsFilterMenu>
        <SearchInput />
        <CategoryFilter />
        <PriceRangeInput />
      </StyledProductsFilterMenu>
    </>
  );
};
export default ProductsFilterMenu;
