import React from "react";
import ProdutcsList from "../../components/ProdutcsList/ProdutcsList";
import ProductsFilterMenu from "../../components/ProductsFilterMenu/ProductsFilterMenu";
import Fade from "react-reveal/Fade";
const Produtcs = () => {
  return (
    <>
      <ProductsFilterMenu />
      <Fade delay={300}>
        <ProdutcsList />
      </Fade>
    </>
  );
};
export default Produtcs;
