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
    &::-webkit-scrollbar {
    width: 8px;     /* Tamaño del scroll en vertical */
    height: 8px;    /* Tamaño del scroll en horizontal */
    display: none;  /* Ocultar scroll */
}
`;

export default GlobalStyles;
