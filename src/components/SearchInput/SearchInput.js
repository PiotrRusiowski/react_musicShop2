import React, { useContext } from "react";
import RootContext from "../../context/context";
import styled from "styled-components";
import img from "../../assets/icons/search_whitex2.png";
import Pulse from "react-reveal/Pulse";

const StyledSearchInputWrapper = styled.div`
  height: 30px;
  display: flex;
  @media (max-width: 426px) {
    margin-bottom: 5px;
    margin-right: 25px;
    height: 35px;
  }
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
  border-radius: 0px 0px 0px 0px;
  transition: 0.4s;
  width: 105px;
  height: 100%;
  :focus {
    width: 180px;
  }

  @media (max-width: 426px) {
    height: 100%;
    font-size: 16px;
    width: 100%;
    border-left: 1px solid black;
    border-radius: 0px 0px 5px 5px;
    transition: 0.3s;
    :focus {
      width: 100%;
      height: 110%;
    }
  }

  /* @media (max-width: 321px) {
    height: 110%;
    font-size: 16px;
    margin-right: 0;

    width: 100%;
    :focus {
      width: 100%;
      margin-right: 0;
    }
  } */
`;

const SearchInput = () => {
  const context = useContext(RootContext);
  const { searchValue, filterMenager } = context;

  return (
    <StyledSearchInputWrapper>
      <Pulse forever>
        {" "}
        <StyledInputIcon></StyledInputIcon>
      </Pulse>

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
