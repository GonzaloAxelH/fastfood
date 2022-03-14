import React from "react";
import styled from "styled-components";
import SlidingPortal from "../../Portals/SlidingPortal";
import { useState, useEffect } from "react";

function SlidingCart({ cartIsOpen, closeSlidingCart }) {
  return (
    <SlidingPortal isOpen={cartIsOpen} handleClose={closeSlidingCart}>
      <h1>Sliding Cart</h1>
    </SlidingPortal>
  );
}

export default SlidingCart;
