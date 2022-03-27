import "../styles/GlobalStyles/fontsGlobals.css";
import NextNProgress from "nextjs-progressbar";
import { SingleTheme } from "../styles/theme/Variables";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { useState, createContext } from "react";

export const FullContext = createContext();
function MyApp({ Component, pageProps }) {
  const theme = SingleTheme;
  const [openCart, setOpenCart] = useState(false);
  const [openFavorites, setOpenFavorites] = useState(false);
  const [openSearching, setOpenSearching] = useState(false);
  const [openPerfil, setOpenPerfil] = useState(false);
  const [updateOrder, setUpdateOrder] = useState(false);
  const [openOrderProduct, setOpenOrderProduct] = useState(false);
  const allContextValues = {
    openCart,
    setOpenCart,
    openFavorites,
    setOpenFavorites,
    openSearching,
    setOpenSearching,
    openPerfil,
    setOpenPerfil,
    openOrderProduct,
    setOpenOrderProduct,
    updateOrder,
    setUpdateOrder,
  };
  return (
    <FullContext.Provider value={allContextValues}>
      <ThemeProvider theme={theme}>
        <NextNProgress
          color="#FCCC4C"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
          options={{ easing: "ease", speed: 500 }}
        />
        <GlobalStyles />
        <Component {...pageProps} />;
      </ThemeProvider>
    </FullContext.Provider>
  );
}

export default MyApp;
