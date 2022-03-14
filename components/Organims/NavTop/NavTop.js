import React from "react";
import styled from "styled-components";
import { ItemNav } from "../../Molecules/ItemNav";
import Logo from "../../Atoms/Logos/Logo";
import Links from "./ObjectLinks";
const WrapperNavTop = styled.div`
  margin-top: 1em;
  background-color: #222222;
  display: flex;
  justify-content: space-around;

  .temp-menu {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
  }
  @media (max-width: ${(props) => props.theme.screens.desktopL}) {
    .temp-menu {
      display: block;
    }
  }
`;
const Left = styled.div`
  display: flex;
  padding-left: 3em;
`;
const Right = styled.div`
  display: flex;
  position: relative;
  padding-right: 3em;
`;

export default function NavTop({ offset, openMenu }) {
  return (
    <WrapperNavTop>
      <Left>
        <ItemNav label="HOME" links={Links.linksListHome} />
        <ItemNav label="ABOUT LAFKA" links={Links.linksListBlog} />
        <ItemNav label="OUR BLOG" links={Links.linksListAbout} />
        <ItemNav label="ORDER MENU" path="/google" />
      </Left>
      <div>
        <Logo offset={offset} />
      </div>
      <Right>
        <ItemNav label="HOME" />
        <ItemNav label="ABOUT LAFKA" />
        <ItemNav label="OUR BLOG" />
        <ItemNav label="ORDER MENU" />
        <button className="temp-menu" onClick={openMenu}>
          Nav Mobile
        </button>
      </Right>
    </WrapperNavTop>
  );
}
