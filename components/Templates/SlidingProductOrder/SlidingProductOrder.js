import React, { useContext } from "react";
import styled from "styled-components";

import PortalSlidingContainer from "../../Portals/SlidingPortal";
import { FullContext } from "../../../pages/_app";
import ProductPresent from "../ProductPresent/ProductPresent";
const WrapperContent = styled.div`
  height: 100vh;
  padding: 0 0 3em 0;
  overflow-y: auto;
`;
export default function JustProductOrder() {
  const { openOrderProduct, setOpenOrderProduct, setUpdateOrder } =
    useContext(FullContext);
  return (
    <PortalSlidingContainer
      isOpen={openOrderProduct}
      setIsOpen={setOpenOrderProduct}
      setUpdateOrder={setUpdateOrder}
    >
      <WrapperContent>
        <ProductPresent />
      </WrapperContent>
    </PortalSlidingContainer>
  );
}
