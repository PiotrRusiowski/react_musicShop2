import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProdutcsList from "../../components/ProdutcsList/ProdutcsList";
import ProductsFilterMenu from "../../components/ProductsFilterMenu/ProductsFilterMenu";

const Produtcs = () => {
  return (
    <>
      <Navbar />
      <ProductsFilterMenu />
      <ProdutcsList />
    </>
  );
};
export default Produtcs;
