import { Html, Main, Head, NextScript } from "next/document";
import styled from "styled-components";

const Body = styled.body``;
export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Body id="body">
        <Main />
        <NextScript />
      </Body>
    </Html>
  );
}
