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
const ProductNotExiste = styled.div`
  height: 50vh;
  width: 100%;
  overflow: hidden;

  position: relative;
`;
const LoaderWrapper = styled.div`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 10px;
  background: #3498db;
  border-radius: 5px;
  animation: load 1.8s ease-in-out infinite;
  &:before,
  &:after {
    position: absolute;
    display: block;
    content: "";
    animation: load 1.8s ease-in-out infinite;
    height: 10px;
    border-radius: 5px;
  }

  &:before {
    top: -20px;
    left: 10px;
    width: 40px;
    background: #ef4836;
  }

  &:after {
    bottom: -20px;
    width: 35px;
    background: #f5ab35;
  }

  @keyframes load {
    0% {
      transform: translateX(40px);
    }

    50% {
      transform: translateX(-30px);
    }

    100% {
      transform: translateX(40px);
    }
  }
`;
const Loader = () => {
  return <LoaderWrapper></LoaderWrapper>;
};

function SingleProduct({ getProductByName, product }) {
  const [singleProduct, setSingleProduct] = useState(product);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { nameProduct } = router.query;
  useEffect(() => {
    getProductByName(nameProduct);
    setSingleProduct(product);
    console.log(singleProduct);
  });
  return (
    <Layout>
      <WrapperPage>
        <div className="center">
          <Path />
        </div>
        <section>
          {singleProduct && <ProductPresent singleProduct={singleProduct} />}
          {!singleProduct && (
            <ProductNotExiste>
              <Loader />
            </ProductNotExiste>
          )}
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
