import React from "react";

import ListLinks from "./ListLinks";
import Link from "next/link";
import { LINKS, cards } from "./linksData";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import {
  WrapperFooter,
  CardAccepts,
  FooterBotton,
  ListCards,
  FooterTop,
} from "./FooterStyles.jsx";
export default function Footer() {
  return (
    <WrapperFooter>
      <FooterTop>
        <ListLinks title="Information" links={LINKS.infomation} />
        <ListLinks title="Extras" links={LINKS.extras} />
        <ListLinks title="Get In Touch" links={LINKS.getInTouch} />
        <CardAccepts>
          <h3>We Accept</h3>
          <ListCards>
            {cards.map((card, index) => {
              return <span key={index} className={card.nameCard}></span>;
            })}
          </ListCards>
        </CardAccepts>
      </FooterTop>
      <FooterBotton>
        <div>
          <Link href="/">
            <a target="_blank">
              <AiFillFacebook />
            </a>
          </Link>
          <Link href="/">
            <a target="_blank">
              <AiFillYoutube />
            </a>
          </Link>
          <Link href="/">
            <a target="_blank">
              <AiOutlineTwitter />
            </a>
          </Link>
          <Link href="/">
            <a target="_blank">
              <AiOutlineInstagram />
            </a>
          </Link>
        </div>
        <p>
          This theme inspired by theAlThemist/Lafka | © 2022 All rights
          reserved!
        </p>
      </FooterBotton>
    </WrapperFooter>
  );
}
