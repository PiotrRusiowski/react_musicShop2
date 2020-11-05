import React, { useContext } from "react";
import Product from "../Product/Product";
import RootContext from "../../context/context";
import styled from "styled-components";
import Card from "../styledComponents/Card";

const StyledProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0;
  justify-content: space-around;
`;
const StyledCard = styled(Card)`
  :hover {
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.75);
  }
`;
const ProdutcsList = () => {
  const context = useContext(RootContext);

  return (
    <>
      <div className="container2">
        {context.filteredProducts.length === 0 ? (
          <p>sorry, no products matched your search filters </p>
        ) : (
          <StyledProductList  >
            {context.filteredProducts.map((product) => {
              const {
                productName,
                productDesc,
                productImage,
                productPrice,
                productId
              } = product;
              return (
                <StyledCard
              key={productId}
                >
                  <Product

                    name={productName}
                    desc={productDesc}
                    image={productImage}
                    price={productPrice}
                  />
                </StyledCard>
              );
            })}
          </StyledProductList>
        )}
      </div>
    </>
  );
};
export default ProdutcsList;
