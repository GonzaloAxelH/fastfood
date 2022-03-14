import React from "react";
import styled from "styled-components";
import SlidingPortal from "../../Portals/SlidingPortal";
import { useState, useEffect } from "react";

function SlidingSearch({ searchIsOpen, closeSlidingSearch }) {
  return (
    <SlidingPortal isOpen={searchIsOpen} handleClose={closeSlidingSearch}>
      <h1>Search Sliding</h1>
      <input type="text" placeholder="Search" />
    </SlidingPortal>
  );
}

export default SlidingSearch;
