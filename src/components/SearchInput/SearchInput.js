import React, { useContext } from "react";
import "./SearchInput.css";
import RootContext from "../../context/context";
const SearchInput = () => {
  const context = useContext(RootContext);
  const { searchValue, filterMenager, filerProductBySearchInput } = context;

  return (
    <>
      <span className="inputIcon"></span>
      <input
        className="searchInput"
        type="text"
        name="searchInput"
        value={searchValue}
        onChange={filterMenager}
      />
    </>
  );
};

export default SearchInput;
