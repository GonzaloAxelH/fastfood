import React from "react";
import styled from "styled-components";
import NavTop from "../../Organims/NavTop/NavTop";
import MiniNav from "../../Molecules/MiniNav/MiniNav";
import PhoneNav from "../../Molecules/MiniNav/PhoneNav";
const NavigationWrapperFixed = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 10;
  background: transparent;
`;
const WrapperMiniNavs = styled.div`
  display: flex;
  padding: 0 50px;
  width: 100%;

  height: 152px;
  justify-content: space-between;
  align-items: center;
`;

export default function Navigation() {
  return (
    <NavigationWrapperFixed>
      <NavTop />
      <WrapperMiniNavs>
        <PhoneNav />
        <MiniNav />
      </WrapperMiniNavs>
    </NavigationWrapperFixed>
  );
}
