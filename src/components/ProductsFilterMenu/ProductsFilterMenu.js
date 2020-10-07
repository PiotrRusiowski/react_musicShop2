import React, { useContext } from "react";
import SearchInput from "../SearchInput/SearchInput";
import CategoryFilter from "./CategoryFilter";
import PriceRangeInput from "../PriceRangeInput/PriceRangeInput";
import styled, { css } from "styled-components";
import RootContext from "../../context/context";

const StyledProductsFilterMenu = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.blue};
  box-shadow: 10px 0px 10px 0px rgba(0.5, 0, 0, 0.7);
  ${({ mobile }) =>
    mobile &&
    css`
      @media (max-width: 426px) {
        flex-direction: column;
        background-color: black;
      }
    `}
`;
const StyledFilterMenu = styled.div`
  width: ${({ isOpen }) => (isOpen ? "350px" : "0px")};
  display: flex;
  transition: all 0.5s ease-in-out;
  @media (max-width: 426px) {
    flex-direction: column;
    height: ${({ isOpen }) => (isOpen ? "70px" : "0px")};
    transition: all 0.3s ease-in-out;
  }
`;
const StyledFiltersWrapper = styled.div`
  display: flex;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: all 0.3s ease-in-out;
  transition-delay: 0.5s;
  @media (max-width: 426px) {
    flex-direction: column-reverse;
    /* align-items: center; */
  }
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
  :hover {
    color: white;
  }
`;
const StyledArrow = styled.img`
  width: 20px;
  height: 20px;
`;
const ProductsFilterMenu = () => {
  const context = useContext(RootContext);
  const { handleFilterMenuOpen, isFilterMenuOpen } = context;
  return (
    <>
      <StyledProductsFilterMenu mobile>
        <SearchInput />
        <StyledFilterMenu isOpen={isFilterMenuOpen}>
          <StyledFiltersWrapper isVisible={isFilterMenuOpen}>
            {isFilterMenuOpen ? (
              <>
                <CategoryFilter />
                <PriceRangeInput />
              </>
            ) : (
              ""
            )}
          </StyledFiltersWrapper>
        </StyledFilterMenu>

        <StyledFilterButton onClick={handleFilterMenuOpen}>
          {isFilterMenuOpen ? "< Hide" : "More filter >"}
        </StyledFilterButton>
      </StyledProductsFilterMenu>
    </>
  );
};
export default ProductsFilterMenu;
