import React from "react";
import styled from "styled-components";
import SlidingPortal from "../../Portals/SlidingPortal";
import { useState, useEffect } from "react";

function SlidingFavorite({ favoriteIsOpen, closeSlidingFavorite }) {
  return (
    <SlidingPortal isOpen={favoriteIsOpen} handleClose={closeSlidingFavorite}>
      <h1>Sliding Favorite</h1>
    </SlidingPortal>
  );
}

export default SlidingFavorite;
