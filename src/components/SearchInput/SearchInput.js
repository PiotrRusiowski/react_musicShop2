import React, { useContext } from "react";
import "./SearchInput.css";
import RootContext from "../../context/context";
const SearchInput = () => {
  const context = useContext(RootContext);
  const { searchValue, filterMenager, filerProductBySearchInput } = context;

  return (
    <div className="searchinput__wraper">
      <div className="inputIcon"></div>
      <input
        className="searchInput"
        type="text"
        name="searchInput"
        value={searchValue}
        onChange={filterMenager}
        placeholder="search..."
      />
    </div>
  );
};

export default SearchInput;
