import React, { useEffect, useContext } from "react";
import RootContext from "../../context/context";
import ProdutcsList from "../../components/ProdutcsList/ProdutcsList";
import ProductsFilterMenu from "../../components/ProductsFilterMenu/ProductsFilterMenu";
import Fade from "react-reveal/Fade";
const Produtcs = () => {
  useEffect(() => {
    document.title = "Products";
  }, []);

  const context = useContext(RootContext);
  const hover = "0px 5px 15px 0px rgba(0, 0, 0, 0.75)";
  return (
    <>
      <ProductsFilterMenu />
      <Fade delay={300}>
        <ProdutcsList product={context.filteredProducts} hover={hover} />
      </Fade>
    </>
  );
};
export default Produtcs;
