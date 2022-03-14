import styled from "styled-components";
import NavCategory from "../components/Organims/NavCategory/NavCategory";
import Navigation from "../components/Templates/Navigation/Navigation";
import BannerSlide from "../components/Templates/Banners/BannerSlide";
import { useState, useEffect } from "react";
import GrilledBurgers from "../components/Templates/GrilledBurgers/GrilledBurgers";
import ListCategorySlide from "../components/Organims/ListCategorySlide/ListCategorySlide";
import useScroll from "../Hooks/useScroll";
import Footer from "../components/Templates/Footer/Footer";
import SlidingCart from "../components/Templates/Cart/SlidingCart";
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
export default function Home() {
  const { offset } = useScroll();
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [favoriteIsOpen, setFavoriteIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [userIsOpen, setUserIsOpen] = useState(false);
  const [menuIsOpen, menuUserIsOpen] = useState(false);

  return (
    <>
      <SlidingCart
        cartIsOpen={cartIsOpen}
        closeSlidingCart={() => setCartIsOpen(false)}
      />
      <SlidingFavorite
        favoriteIsOpen={favoriteIsOpen}
        closeSlidingFavorite={() => setFavoriteIsOpen(false)}
      />
      <SlidingSearch
        searchIsOpen={searchIsOpen}
        closeSlidingSearch={() => setSearchIsOpen(false)}
      />
      <NavMobile
        menuIsOpen={menuIsOpen}
        closeSlidingMenu={() => menuUserIsOpen(false)}
      />
      <Navigation
        scrollOffset={offset}
        openSlidingCart={() => setCartIsOpen(true)}
        openSlidingFavorite={() => setFavoriteIsOpen(true)}
        openSlidingSearch={() => setSearchIsOpen(true)}
        openSlidingUser={() => setUserIsOpen(true)}
        openMenu={() => menuUserIsOpen(true)}
      />

      <WrapperAbsoluteNavCategory scrollOffset={offset}>
        <NavCategory scrollOffset={offset} />
      </WrapperAbsoluteNavCategory>
      <div>
        <section>
          <BannerSlide />
        </section>
        <section>
          <ListCategorySlide />
        </section>
        <section>
          <GrilledBurgers />
        </section>
      </div>
      <Footer />
    </>
  );
}
