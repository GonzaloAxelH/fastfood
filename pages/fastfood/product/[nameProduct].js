import React from "react";
import Path from "../../../components/Atoms/Path/Path";
import Layout from "../../../Layouts/Layout";
import styled from "styled-components";
import ProductPresent from "../../../components/Templates/ProductPresent/ProductPresent";
import ProductReviews from "../../../components/Templates/ProductReviews/ProductReviews";
import YouMayAlsoLike from "../../../components/Templates/YouMayAlsoLike/YouMayAlsoLike";
import OtherProducts from "../../../components/Templates/OtherProducts/OtherProducts";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
const WrapperPage = styled.div`
  padding: 300px 0 0 0;

  @media (max-width: ${(props) => props.theme.screens.tabletXL}) {
    padding: 200px 0 0 0;
  }
  .center {
    text-align: center;
  }
`;
function SingleProduct({ getProductByName, product }) {
  const [singleProduct, setSingleProduct] = useState(false);
  const router = useRouter();
  const { nameProduct } = router.query;
  useEffect(() => {
    getProductByName(nameProduct);
    setSingleProduct(product);
    console.log(product);
  }, [router, getProductByName, product]);
  return (
    <Layout>
      <WrapperPage>
        <div className="center">
          <Path />
        </div>
        <section>
          {singleProduct && <ProductPresent singleProduct={singleProduct} />}
        </section>
        <section>
          <ProductReviews />
        </section>
        <section>
          <YouMayAlsoLike />
        </section>
        <section>
          <OtherProducts />
        </section>
      </WrapperPage>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.products.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductByName: (nameProduct) => {
      dispatch({
        type: "GET_PRODUCT",
        payload: {
          nameProduct,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
