import React from "react";
import Product from "../Product/Product";

import styled from "styled-components";
import Card from "../styledComponents/Card";

const StyledProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0;
  justify-content: space-around;
`;

const StyledTriangle = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: ${({ display }) => display || "none"};
  border-color: transparent yellow;
  border-style: solid;
  border-width: 100px 0px 100px 100px;
  height: 0px;
  width: 0px;
  position: absolute;
  z-index: 100;
  top: -60px;
  right: -10px;
  transform: rotate(-45deg);
`;
const StyledSaleValue = styled.h2`
  position: absolute;
  top: -15px;
  right: 25px;
  transform: rotate(45deg);
`;
const ProdutcsList = ({ product, hover, boxShadow, bgc, display }) => {
  return (
    <>
      <div className="container2">
        {product.length === 0 ? (
          <p>sorry, no products matched your search filters </p>
        ) : (
          <StyledProductList>
            {product.map((product) => {
              const {
                productName,
                productDesc,
                productImage,
                productPrice,
                productId,
              } = product;
              return (
                <Card
                  hover={hover}
                  key={productId}
                  boxShadow={boxShadow}
                  bgc={bgc}
                >
                  <StyledTriangle display={display}>
                    <StyledSaleValue>-30%</StyledSaleValue>
                  </StyledTriangle>
                  <Product
                    name={productName}
                    desc={productDesc}
                    image={productImage}
                    price={productPrice}
                  />
                </Card>
              );
            })}
          </StyledProductList>
        )}
      </div>
    </>
  );
};
export default ProdutcsList;
