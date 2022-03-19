import React from "react";
import Path from "../../../components/Atoms/Path/Path";
import Layout from "../../../Layouts/Layout";
import styled from "styled-components";
import ProductPresent from "../../../components/Templates/ProductPresent/ProductPresent";
const WrapperPage = styled.div`
  padding: 300px 40px 40px;
`;
function SingleProduct() {
  return (
    <Layout>
      <WrapperPage>
        <div>
          <Path />
        </div>
        <section>
          <ProductPresent />
        </section>
        <section>{/* Description Product and reviews*/}</section>
        <section>{/* Other diferent products interesed*/}</section>
        <section>{/* Otros Products de la misma categoria */}</section>
        <div></div>
        {/* NExt y prev de productos de la misma categoria */}
      </WrapperPage>
    </Layout>
  );
}

export default SingleProduct;
