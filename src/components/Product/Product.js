import React, { useContext } from "react";
import RootContext from "../../context/context";
import { Link } from "react-router-dom";
import Button from "../../components/styledComponents/Button";
import styled from "styled-components";

const StyledProductTitle = styled.h2`
  font-weight: normal;
  margin: 0;
  text-align: center;
`;
const StyledProductPrice = styled.h4`
  padding: 14px;
  font-weight: lighter;
`;
const StyledProductImg = styled.img`
  height: 190px;
  width: 200px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const StyledProductDesc = styled.p`
  text-align: center;
  padding: 15px 5px;
  color: ${({ theme }) => theme.fontMutted};
`;
const StyledReadMoreBtn = styled.button`
  border: none;
  border-bottom: 1px solid white;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid black;
  }
`;

const Product = ({ name, desc, image, price }) => {
  const context = useContext(RootContext);
  const { addToCart, increaseCartCounter, handleDuplicateInCart } = context;

  return (
    <>
      <StyledProductTitle>{name}</StyledProductTitle>
      <StyledProductPrice>{price}$</StyledProductPrice>
      <Link
        to={{
          pathname: `/products/${name}`,
          state: {
            name: name,
            desc: desc,
            image: image,
            price: price,
          },
        }}
      >
        <StyledProductImg src={image} alt="" />
      </Link>
      <div className="line2"></div>
      <StyledProductDesc>
        {desc.slice(0, 70)}{" "}
        <Link
          to={{
            pathname: `/products/${name}`,
            state: {
              name: name,
              desc: desc,
              image: image,
              price: price,
            },
          }}
        >
          <StyledReadMoreBtn>read more...</StyledReadMoreBtn>
        </Link>
      </StyledProductDesc>
      <Button
        addBtn
        onClick={() => {
          handleDuplicateInCart(name);
          addToCart(name);
          increaseCartCounter();
        }}
        className="addToCart_btn"
      >
        Add to cart
      </Button>
    </>
  );
};
export default Product;
