import styled, { css } from "styled-components";

const Button = styled.button`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s};
  letter-spacing: 2px;
  padding: 12px 45px;
  background-color: ${({ theme }) => theme.blue};
  border: 2px black solid;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.lightBlue};
  }
  /* background-color: ${(props) =>
    props.isBlue ? "blue" : props.isDark ? "black" : "pink"}; */

  /* background-color: ${({ isBlue }) =>
    isBlue
      ? "blue"
      : "pink"};
  outline: none;
  border: none;
  color: white;
  padding: 8px 15px;
  border-radius: 5px; */
  ${({ small }) =>
    small &&
    css`
      margin-top: 0px;
      margin-left: auto;
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: bold;
      padding: 8px 30px;
      border: 1px solid black;
    `}

  ${({ addBtn }) =>
    addBtn &&
    css`
      margin-top: 0px;
      padding: 0.5rem 2rem;
      border-radius: 5px;
      font-size: 13px;
      background-color: #eeeeee;
      border: 1px solid black;
      outline: none;
      transition: 0.3;
      letter-spacing: 0.5px;
    `}
`;
export default Button;
