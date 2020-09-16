import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

html {
  font-size: 62.5%;
}
p{
  color:#666;
  padding-bottom:1rem;
  padding-top:1rem;
 
}
body {
  font-size: 1.6rem;
}
.container {
  margin: 0px 25px;
}

.line2 {
  width: 90%;
  height: 1px;
  background-color: #eeeeee;
  margin: 2px 0;
}
.line {
  height: 90%;
  width: 2px;
  background-color: #eeeeee;
}


`;

export default GlobalStyle;
