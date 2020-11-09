import React, { useEffect } from "react";
import ProdutcsList from "../../components/ProdutcsList/ProdutcsList";
import ProductsFilterMenu from "../../components/ProductsFilterMenu/ProductsFilterMenu";
import Fade from "react-reveal/Fade";
const Produtcs = () => {
  useEffect(() => {
    document.title = "Products";
  }, []);
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
