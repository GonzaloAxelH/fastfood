import "../styles/GlobalStyles/fontsGlobals.css";
import NextNProgress from "nextjs-progressbar";
import { SingleTheme } from "../styles/theme/Variables";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { useState, createContext } from "react";
import { Provider } from "react-redux";
import store from "../redux/store/Store";
import { actionLoadCart } from "../redux/actioncreators/actonsCart";

store.subscribe(() => {
  console.log("store", store.getState());
});

store.dispatch(actionLoadCart());

export const FullContext = createContext();
function MyApp({ Component, pageProps }) {
  const theme = SingleTheme;
  const [openCart, setOpenCart] = useState(false);
  const [openFavorites, setOpenFavorites] = useState(false);
  const [openSearching, setOpenSearching] = useState(false);
  const [openPerfil, setOpenPerfil] = useState(false);
  const [openSlidingEditCart, setOpenSlidingEditCart] = useState(false);
  const [openSlidingOrderProduct, setOpenSlidingOrderProduct] = useState(false);
  const allContextValues = {
    openCart,
    setOpenCart,

    openFavorites,
    setOpenFavorites,

    openSearching,
    setOpenSearching,

    openPerfil,
    setOpenPerfil,

    openSlidingOrderProduct,
    setOpenSlidingOrderProduct,

    openSlidingEditCart,
    setOpenSlidingEditCart,
  };

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default MyApp;
