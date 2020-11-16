import styled from "styled-components";

const Card = styled.li`
  position: relative;
  flex-basis: 25%;
  margin-bottom: 50px;
  padding: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  transition: 0.3s;
  border-radius: 5px;
  box-shadow: ${(props) => props.boxShadow || "none"};
  background-color: ${(props) => props.bgc || "initial"};
  :hover {
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.75);
  }
`;
export default Card;
