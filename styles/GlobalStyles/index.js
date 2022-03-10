import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    body {
        margin: 0;
      background-color: #f2f2f2;
      overflow-x:hidden ;
    }
`;

export default GlobalStyles;
