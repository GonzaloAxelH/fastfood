import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      text-rendering: optimizeLegibility;
    }
    body {
        margin: 0;
      background-color: #fff;
      overflow-x:hidden ;
      height: 100vh;
      
      }
 
`;

export default GlobalStyles;
