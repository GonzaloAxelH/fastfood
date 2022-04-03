import React, { useContext } from "react";
import styled from "styled-components";

import PortalSlidingContainer from "../../Portals/SlidingPortal";
import { FullContext } from "../../../pages/_app";
import ProductPresent from "../ProductPresent/ProductPresent";
import { connect } from "react-redux";
const WrapperContent = styled.div`
  height: 100vh;
  padding: 0 0 3em 0;
  overflow-y: auto;
`;
function SlidingEditOrderCart({ product }) {
  const { openSlidingEditCart, setOpenSlidingEditCart } =
    useContext(FullContext);
  return (
    <PortalSlidingContainer
      isOpen={openSlidingEditCart}
      setIsOpen={setOpenSlidingEditCart}
    >
      <WrapperContent>{product && <ProductPresent />}</WrapperContent>
    </PortalSlidingContainer>
  );
}
const mapStateToProps = (state) => {
  return {
    product: state.products.product,
  };
};
export default connect(mapStateToProps)(SlidingEditOrderCart);
