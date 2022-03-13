import styled from "styled-components";
import NavCategory from "../components/Organims/NavCategory/NavCategory";
import Navigation from "../components/Templates/Navigation/Navigation";
import BannerSlide from "../components/Templates/Banners/BannerSlide";
import { useState, useEffect } from "react";
import GrilledBurgers from "../components/Templates/GrilledBurgers/GrilledBurgers";
import ListCategorySlide from "../components/Organims/ListCategorySlide/ListCategorySlide";
import useScroll from "../Hooks/useScroll";

const WrapperAbsoluteNAvCategory = styled.div`
  position: absolute;
  width: 93vw;
  left: 50%;

  transform: translate(-50%, 0);
  top: 210px;
  z-index: 1;
`;
export default function Home() {
  const { offset } = useScroll();
  return (
    <>
      <div>
        <Navigation scrollOffset={offset} />
        <WrapperAbsoluteNAvCategory scrollOffset={offset}>
          <NavCategory scrollOffset={offset} />
        </WrapperAbsoluteNAvCategory>
      </div>
      <section>
        <BannerSlide />
      </section>
      <section>
        <ListCategorySlide />
      </section>
      <section>
        <GrilledBurgers />
      </section>
    </>
  );
}
