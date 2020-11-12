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

const ProdutcsList = ({ product, hover, boxShadow, bgc }) => {
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
