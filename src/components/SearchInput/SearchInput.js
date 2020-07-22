import React, { useContext } from "react";
import "./SearchInput.css";
import RootContext from "../../context/context";
const SearchInput = () => {
  const context = useContext(RootContext);
  const { searchValue, filterMenager, filerProductBySearchInput } = context;

  return (
    // <form onSubmit={filerProductBySearchInput}>
    //   <span className="inputIcon"></span>
    //   <input className="searchInput" type="text" name="searchInput" />
    //   <button type="submit">Search</button>
    // </form>
    <>
      <span className="inputIcon"></span>
      <input
        className="searchInput"
        type="text"
        name="searchInput"
        onChange={filterMenager}
        value={searchValue}
      />
    </>
  );
};

export default SearchInput;
