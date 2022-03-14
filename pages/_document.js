import { Html, Main, Head, NextScript } from "next/document";
import styled from "styled-components";

const Body = styled.body``;
const CartPortal = styled.div``;
export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Body id="body">
        <Main />
        <CartPortal id="sliding-cart"></CartPortal>
        <NextScript />
      </Body>
    </Html>
  );
}
