import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/back.svg";
import styled from "styled-components";

const StyledSingleProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.lightGrey};
`;
const StyledSingleProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20%;
  background-color: white;
  height: 90%;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 10px;
`;
const StyledSingleProductWrapper1 = styled.div`
  flex-basis: 55%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
const StyledSingleProductWrapper2 = styled.div`
flex-basis: 35%;
  padding: 5px;
}`;
const StyledSingleProductImg = styled.img`
  width: 100%;
  height: 70%;
`;
const StyledSingleProductDesc = styled.p`
  padding: 10px;
  line-height: 1.4;
  color: #666;
`;
const StyledSingleProductPrice = styled.div`
  padding: 10px;
  color: #666;
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const StyledLinkBtn = styled.button`
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #599ef8;
  width: 40px;
  height: 40px;
  margin: 5px 5px;
`;
const StyledArrow = styled.img`
  width: 20px;
  height: 20px;
`;
const StyledLinText = styled.p`
  color: black;
  text-decoration: none;
`;

const SingleProduct = (props) => {
  const { name, desc, image, price } = props.location.state;
  return (
    <StyledSingleProduct>
      <StyledSingleProductWrapper>
        <StyledSingleProductWrapper1>
          <h1>{name}</h1>
          <StyledSingleProductImg src={image} alt="singleProduct" />
        </StyledSingleProductWrapper1>
        <div className="line"></div>
        <StyledSingleProductWrapper2>
          <StyledSingleProductDesc>{desc}</StyledSingleProductDesc>
          <StyledSingleProductPrice>
            <strong>Price: </strong>
            {price}$
          </StyledSingleProductPrice>
          <StyledLink to="/products">
            <StyledLinkBtn>
              <StyledArrow src={arrowIcon} alt="go back" />
            </StyledLinkBtn>
            <StyledLinText>Back to products</StyledLinText>
          </StyledLink>
        </StyledSingleProductWrapper2>
      </StyledSingleProductWrapper>
    </StyledSingleProduct>
  );
};
export default SingleProduct;
