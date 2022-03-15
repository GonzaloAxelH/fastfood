import React from "react";
import styled from "styled-components";
import PortalMenuLeft from "../../Portals/MenuLeftPortal";
import { useState, useEffect } from "react";

const Title = styled.h1`
  color: #222;
  font-family: "Rubik 700";
  padding: 2em;
`;
function NavMobile({ menuIsOpen, closeSlidingMenu }) {
  return (
    <PortalMenuLeft isOpen={menuIsOpen} handleClose={closeSlidingMenu}>
      <Title>Menu</Title>
    </PortalMenuLeft>
  );
}

export default NavMobile;
