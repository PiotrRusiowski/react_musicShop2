import React, { useContext } from "react";
import RootContext from "../../context/context";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/icons/back.svg";
import styled from "styled-components";
import Line from "../../components/styledComponents/Line";
import Fade from "react-reveal/Fade";
import Button from "../../components/styledComponents/Button";
import { useAlert } from "react-alert";

const StyledSingleProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.lightGrey};
  @media (max-width: 769px) {
    height: auto;
  }
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
  @media (max-width: 769px) {
    flex-direction: column;
    justify-content: space-around;
    margin: 5% 5%;
  }
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
const StyledVerticalLine = styled(Line)`
  @media (max-width: 769px) {
    display: none;
  }
`;
const StyledLine = styled(Line)`
  @media (min-width: 769px) {
    display: none;
  }
`;

const SingleProduct = (props) => {
  const alert = useAlert();
  const context = useContext(RootContext);
  const { addToCart, increaseCartCounter, handleDuplicateInCart } = context;
  const { name, desc, image, price } = props.location.state;
  return (
    <Fade delay={300}>
      <StyledSingleProduct>
        <StyledSingleProductWrapper>
          <StyledSingleProductWrapper1>
            <StyledLink to="/products">
              <StyledLinkBtn>
                <StyledArrow src={arrowIcon} alt="go back" />
              </StyledLinkBtn>
            </StyledLink>
            <h1>{name}</h1>
            <StyledSingleProductImg src={image} alt="singleProduct" />
          </StyledSingleProductWrapper1>
          <StyledVerticalLine vertical />
          <StyledLine />
          <StyledSingleProductWrapper2>
            <StyledSingleProductDesc>{desc}</StyledSingleProductDesc>
            <StyledSingleProductPrice>
              <strong>Price: </strong>
              {price}$
            </StyledSingleProductPrice>
            <Button
              addBtn
              onClick={() => {
                handleDuplicateInCart(name);
                addToCart(name);
                increaseCartCounter();
                alert.success(`${name}`);
              }}
              className="addToCart_btn"
            >
              Add to cart
            </Button>
          </StyledSingleProductWrapper2>
        </StyledSingleProductWrapper>
      </StyledSingleProduct>
    </Fade>
  );
};
export default SingleProduct;
