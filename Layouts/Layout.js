import styled from "styled-components";
import NavCategory from "../components/Organims/NavCategory/NavCategory";
import Navigation from "../components/Templates/Navigation/Navigation";
import { useState } from "react";
import useScroll from "../Hooks/useScroll";
import Footer from "../components/Templates/Footer/Footer";
import SlidingCart from "../components/Templates/SlidingCart/SlidingCart";
import SlidingFavorite from "../components/Templates/Favorite/SlidingFavorite";
import SlidingSearch from "../components/Templates/Search/SlidingSearch";
import NavMobile from "../components/Organims/NavMobile/NavMobile";

const WrapperAbsoluteNavCategory = styled.div`
  position: absolute;
  width: 93vw;
  left: 50%;
  transform: translate(-50%, 0);
  top: 210px;
  z-index: 1;
`;

const PageContainer = styled.main`
  min-height: 100vh;
`;

import JustProductOrder from "../components/Templates/SlidingProductOrder/SlidingProductOrder";

export default function Layout({ children }) {
  const { offset } = useScroll();

  const [menuIsOpen, menuUserIsOpen] = useState(false);
  return (
    <>
      <SlidingCart />
      <SlidingFavorite />
      <SlidingSearch />
      <JustProductOrder />
      <NavMobile
        menuIsOpen={menuIsOpen}
        closeSlidingMenu={() => menuUserIsOpen(false)}
      />
      <Navigation scrollOffset={offset} openMenu={() => menuUserIsOpen(true)} />
      <WrapperAbsoluteNavCategory scrollOffset={offset}>
        <NavCategory scrollOffset={offset} />
      </WrapperAbsoluteNavCategory>
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  );
}
