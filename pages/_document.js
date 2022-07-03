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
          image="https://www.clarin.com/img/2021/06/17/LC25eDtCT_1200x630__1.jpg"
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
