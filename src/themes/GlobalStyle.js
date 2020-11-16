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
  margin:0 25px ;
  @media(max-width:376px){
display:none  

}

  
}

.container2{
  margin:0 25px ;
}





`;

export default GlobalStyle;
