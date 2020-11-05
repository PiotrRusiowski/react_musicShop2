import { Form, Field } from "formik";
import styled, { css } from "styled-components";
export const StyledFormContact = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 20px 0;
  ${({ mobile }) =>
    mobile &&
    css`
      @media (max-width: 712px) {
        flex-direction: column-reverse;
      }
    `}
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  justify-content: space-between;
  position: relative;
`;
export const StyledFormWrapper = styled.div`
  display: flex;
  ${({ mobile }) =>
    mobile &&
    css`
      @media (max-width: 712px) {
        flex-direction: column;
      }
    `}
`;
export const StyledFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 20px;
  :nth-child(1) {
    margin-right: 20px;
  }
  ${({ mobile }) =>
    mobile &&
    css`
      @media (max-width: 712px) {
        :nth-child(1) {
          margin-right: 0px;
        }
      }
    `}
`;
export const StyledError = styled.div`
  border-radius: 5px;
  margin-top: 5px;
  margin-left: auto;
  color: red;
  font-weight: lighter;
`;
export const StyledformInputError = styled.div`
  padding: 15px 10px;

  border: 1px solid red;
  border-radius: 5px;
  color: grey;
  outline: none;
`;

export const StyledField = styled(Field)`
  padding: 15px 10px;

  border: ${({ isError }) => (isError ? "1px solid red" : "none")};
  border-radius: 5px;
  background-color: #eeeeee;
  outline: none;
  color: grey;
`;

export const StyledTextArea = styled(Field)`
  padding: 15px 10px;
  border: ${({ isError }) => (isError ? "1px solid red" : "none")};
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #eeeeee;
  outline: none;
  resize: none;
  height: 140px;
`;

export const StyledFormDesc = styled.div`
  flex-basis: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.4;
`;
