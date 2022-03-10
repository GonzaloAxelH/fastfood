import "../styles/GlobalStyles/fontsGlobals.css";
import NextNProgress from "nextjs-progressbar";
import { SingleTheme } from "../styles/theme/Variables";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  const theme = SingleTheme;
  return (
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
  );
}

export default MyApp;
