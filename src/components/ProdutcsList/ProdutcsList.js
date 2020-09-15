import React, { useContext } from "react";
import Product from "../Product/Product";
import RootContext from "../../context/context";
import styled from "styled-components";

const StyledProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0;
  justify-content: space-around;
`;
const StyledProduct = styled.li`
  flex-basis: 25%;
  margin-bottom: 50px;
  padding: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 5px;
`;
const ProdutcsList = () => {
  const context = useContext(RootContext);

  return (
    <>
      <div className="container">
        {context.filteredProducts.length === 0 ? (
          <p>sorry, no products matched your search filters </p>
        ) : (
          <StyledProductList>
            {context.filteredProducts.map((product) => {
              const {
                productName,
                productDesc,
                productImage,
                productPrice,
              } = product;
              return (
                <StyledProduct
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
                </StyledProduct>
              );
            })}
          </StyledProductList>
        )}
      </div>
    </>
  );
};
export default ProdutcsList;
