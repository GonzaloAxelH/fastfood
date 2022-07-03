import { Html, Main, Head, NextScript } from "next/document";
import styled from "styled-components";
import SEO from "../SEO";
const Body = styled.body``;
const CartPortal = styled.div``;
export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <SEO
          url="https://fastfoodilo.vercel.app/fastfood"
          openGraphType="website"
          schemaType="article"
          title="Home"
          description="Aplicacion de delivery FastFood Ilo , pedidos con metodo Stripe y Paypal by Gonzalo Axel"
          image="/fastfood.png"
        />
      </Head>
      <Body id="body">
        <Main />
        <CartPortal id="sliding-cart"></CartPortal>
        <NextScript />
      </Body>
    </Html>
  );
}
