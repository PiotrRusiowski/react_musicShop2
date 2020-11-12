import styled, { css } from "styled-components";

const Arrow = styled.img`
  width: 20px;
  height: 20px;
  ${({ sale }) =>
    sale &&
    css`
      width: 30px;
      height: 30px;
      padding: 5px;
    `}
`;
export default Arrow;
