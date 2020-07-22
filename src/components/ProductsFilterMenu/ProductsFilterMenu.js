import React, { useContext } from "react";
import SearchInput from "../SearchInput/SearchInput";
import RootContext from "../../context/context";
import Filter from "./Filter";
import PriceRangeInput from "../PriceRangeInput/PriceRangeInput";
import "./ProductsFilterMenu.css";
const ProductsFilterMenu = () => {
  const context = useContext(RootContext);

  return (
    <>
      <div className="productsFilterMenu">
        <SearchInput />
        <Filter />
        <PriceRangeInput />
      </div>
    </>
  );
};
export default ProductsFilterMenu;
