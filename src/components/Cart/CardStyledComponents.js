import styled from "styled-components";

export const StyledCartList = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const StyledCartListElement = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 8px;
`;
export const StyledCartListElementImg = styled.img`
  flex-basis: 25%;
  height: 80px;
`;
export const StyledCartListElementName = styled.h2`
  font-size: 16px;
  flex-basis: 30%;
  font-weight: bold;
  line-height: 1.4;
`;
export const StyledCartListElementPrice = styled.h4`
  padding: 10px;
  text-align: right;
  font-size: 15px;
  font-weight: normal;
`;
export const StyledBtnGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-basis: 20%;
`;
