import styled, { css } from "styled-components";

const Button = styled.button`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s};
  letter-spacing: 2px;
  padding: 12px 45px;
  background-color: ${({ theme }) => theme.lightBlue};
  border: 2px black solid;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.blue};
  }

  ${({ small }) =>
    small &&
    css`
      background-color: ${({ theme }) => theme.lightBlue};
      margin-top: 0px;
      position: absolute;
      right: 0;
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: bold;
      padding: 8px 30px;
      border: 1px solid black;
    `}

  ${({ addBtn }) =>
    addBtn &&
    css`
      margin-top: 0px;
      padding: 0.5rem 2.5rem;
      border-radius: 5px;
      font-size: 13px;

      background-color: #ffc439;
      border: 1px solid black;
      outline: none;
      transition: 0.3;
      letter-spacing: 0.5px;
      :hover {
        background-color: #ffc439;
      }
    `}
`;
export default Button;
