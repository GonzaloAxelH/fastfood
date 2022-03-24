import React from "react";
import HeaderPage from "../../../components/Templates/HeaderPage/HeaderPage";
import styled from "styled-components";
import Layout from "../../../Layouts/Layout";
import FormCheckout from "../../../components/Templates/FormCheckout/FormCheckout";
const WrapperCheckout = styled.div`
  min-height: 100vh;
`;
export default function index() {
  return (
    <Layout>
      <WrapperCheckout>
        <section>
          <HeaderPage title="CHECKOUT" />
        </section>
        <section>
          <FormCheckout />
        </section>
      </WrapperCheckout>
    </Layout>
  );
}
