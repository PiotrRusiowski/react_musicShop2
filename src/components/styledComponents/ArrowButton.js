import styled, { css } from "styled-components";
const ArrowButton = styled.button`
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #599ef8;
  width: 40px;
  height: 40px;
  margin: 5px 5px;
  z-index: 100;

  ${({ scrollButton }) =>
    scrollButton &&
    css`
      position: fixed;
      z-index: 100;
      right: 2%;
      bottom: 20%;
      display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
      justify-content: center;
      align-items: center;
    `}
  ${({ scrollDownButton }) =>
    scrollDownButton &&
    css`
      width: 50px;
      height: 50px;
    `};
`;
export default ArrowButton;
