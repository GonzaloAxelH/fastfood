import React, { useEffect } from "react";
import Path from "../../../components/Atoms/Path/Path";
import Layout from "../../../Layouts/Layout";
import ProductPresent from "../../../components/Templates/ProductPresent/ProductPresent";
import ProductReviews from "../../../components/Templates/ProductReviews/ProductReviews";
import YouMayAlsoLike from "../../../components/Templates/YouMayAlsoLike/YouMayAlsoLike";
import OtherProducts from "../../../components/Templates/OtherProducts/OtherProducts";
import { connect } from "react-redux";
import { WrapperPage } from "./ProductPageStyles";
import { actionSetProduct } from "../../../redux/actioncreators/actionsProducts";
import { nameFormat } from "../../../helpers/cartHelpers";
function SingleProduct({ setProduct, allProducts, params }) {
  const { nameProduct } = params;
  const product = allProducts.find((el) => {
    return nameFormat(el.name) === nameProduct;
  });
  setProduct(product ? product : false);

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

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}

const mapStateTopProps = (state) => {
  return {
    allProducts: state.products.allProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProduct: (product) => {
      return dispatch(actionSetProduct(product));
    },
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(SingleProduct);
