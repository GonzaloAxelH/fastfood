import React from "react";
import Path from "../../../components/Atoms/Path/Path";
import Layout from "../../../Layouts/Layout";
import styled from "styled-components";
import ProductPresent from "../../../components/Templates/ProductPresent/ProductPresent";
import ProductReviews from "../../../components/Templates/ProductReviews/ProductReviews";
const WrapperPage = styled.div`
  padding: 300px 0 0 0;

  @media (max-width: ${(props) => props.theme.screens.tabletXL}) {
    padding: 200px 0 0 0;
  }
  .center {
    text-align: center;
  }
`;
function SingleProduct() {
  return (
    <Layout>
      <WrapperPage>
        <div className="center">
          <Path />
        </div>
        <section>
          <ProductPresent />
        </section>
        <section>
          <ProductReviews />
        </section>
        <section>{/* Other diferent products interesed*/}</section>
        <section>{/* Otros Products de la misma categoria */}</section>
      </WrapperPage>
    </Layout>
  );
}

export default SingleProduct;
