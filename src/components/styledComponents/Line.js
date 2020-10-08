import styled, { css } from "styled-components";
const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: #eeeeee;
  /* background-color:black; */
  margin: 2px 0;
  border-radius: 5px;
  ${({ vertical }) =>
    vertical &&
    css`
      height: 90%;
      width: 2px;
      background-color: #eeeeee;
      border-radius: 5px;
    `}
`;
export default Line;
