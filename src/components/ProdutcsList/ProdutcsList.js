import React, { useContext } from "react";
import Product from "../Product/Product";
import "./ProdutcsList.css";
import RootContext from "../../context/context";

const ProdutcsList = () => {
  const context = useContext(RootContext);

  return (
    <ul className="produtcsList">
      {context.products.map((product) => {
        const {
          productName,
          productDesc,
          productImage,
          productPrice,
        } = product;
        return (
          <li
            className="product"
            onClick={() => {
              console.log("li");
            }}
          >
            <Product
              name={productName}
              desc={productDesc}
              image={productImage}
              price={productPrice}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ProdutcsList;
