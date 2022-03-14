import React from "react";
import styled from "styled-components";
import NavTop from "../../Organims/NavTop/NavTop";
import MiniNav from "../../Molecules/MiniNav/MiniNav";
import PhoneNav from "../../Molecules/MiniNav/PhoneNav";
const NavigationWrapperFixed = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 10;
  background: ${(props) => (props.offset == 0 ? "transparent" : "#fff")};

  @media (max-width: ${(props) => props.theme.screens.tabletL}) {
    background: ${(props) =>
      props.offset == 0 ? "transparent" : "transparent"};
  }
  transition: 0.25s all;
`;
const WrapperMiniNavs = styled.div`
  display: flex;
  padding: 0 50px;
  width: 100%;

  height: ${(props) => (props.offset == 0 ? "130px" : "90px")};
  justify-content: space-between;
  align-items: center;
  transition: 0.2s all;

  .temp-menu {
    position: absolute;
    right: 2.3em;
    top: 2.6em;
  }
`;

export default function Navigation({
  scrollOffset,
  openSlidingCart,
  openSlidingFavorite,
  openSlidingUser,
  openSlidingSearch,
  openMenu,
}) {
  return (
    <NavigationWrapperFixed offset={scrollOffset}>
      <NavTop offset={scrollOffset} openMenu={openMenu} />
      <WrapperMiniNavs offset={scrollOffset}>
        <PhoneNav />
        <MiniNav
          openSlidingCart={openSlidingCart}
          openSlidingFavorite={openSlidingFavorite}
          openSlidingUser={openSlidingUser}
          openSlidingSearch={openSlidingSearch}
        />
      </WrapperMiniNavs>
    </NavigationWrapperFixed>
  );
}
