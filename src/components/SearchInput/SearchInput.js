import React, { useContext } from "react";
import RootContext from "../../context/context";
import styled from "styled-components";
import img from "../../assets/icons/search_whitex2.png";

const StyledSearchInputWrapper = styled.div`
  height: 30px;
  display: flex;
`;
const StyledInputIcon = styled.div`
  height: 100%;
  border-left: 1px black solid;
  border-bottom: 1px black solid;
  padding: 5px 10px;
  background-color: black;
  width: 65px;
  background-repeat: no-repeat;
  background-position: 75%;
  /* background-image: url("../../assets/icons/search_whitex2.png"); */
  background-image: url(${img});
  background-size: 25px 25px;
`;
const StyledSearchInput = styled.input`
  font-size: 12px;
  padding: 5px;
  outline: none;
  border: none;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  border-radius: 0px 0px 5px 0px;
  transition: 0.4s;
  width: 105px;
  height: 100%;
  :focus {
    width: 180px;
  }
`;

const SearchInput = () => {
  const context = useContext(RootContext);
  const { searchValue, filterMenager } = context;

  return (
    <StyledSearchInputWrapper>
      <StyledInputIcon></StyledInputIcon>
      <StyledSearchInput
        type="text"
        name="searchInput"
        value={searchValue}
        onChange={filterMenager}
        placeholder="search..."
      />
    </StyledSearchInputWrapper>
  );
};

export default SearchInput;
