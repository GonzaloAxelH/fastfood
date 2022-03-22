import React from "react";
import styled from "styled-components";
import ListLinks from "./ListLinks";
import Link from "next/link";

import {
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFieldTime,
  AiFillPhone,
  AiTwotonePhone,
  AiTwotoneMail,
  AiOutlineHeatMap,
} from "react-icons/ai";
const LINKS = {
  infomation: [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Our Menu", link: "/menu" },
    { name: "Blog", link: "/blog" },
    { name: "Caontacs", link: "/contact" },
  ],
  extras: [
    { name: "My Order", link: "/orders" },
    { name: "Checkout", link: "/terms" },
    { name: "Catering", link: "/catering" },
    { name: "Our locations", link: "/locations" },
    { name: "Privacy Policy", link: "/privacy" },
  ],
  getInTouch: [
    {
      name: "Mon. - Sun.: 10:00 - 23:00",
      Icon: AiOutlineFieldTime,
      link: null,
    },

    {
      name: "164 7th Avenue, Seattle, WA 9801",
      Icon: AiOutlineHeatMap,
      link: null,
    },
    { name: "+1.888.292.7171", Icon: AiFillPhone, link: null },
    { name: "+1.888.292.7172", Icon: AiTwotonePhone, link: null },
    { name: "orders@pizza.com", Icon: AiTwotoneMail, link: "/correo" },
  ],
};

const cards = [
  {
    nameCard: "american-expresss",
  },
  {
    nameCard: "circus",
  },
  {
    nameCard: "maestro",
  },
  {
    nameCard: "mastercard",
  },
  {
    nameCard: "visa",
  },
  {
    nameCard: "cash-delivery",
  },
  {
    nameCard: "directy-debit",
  },
  {
    nameCard: "paypal",
  },
];

const WrapperFooter = styled.footer`
  background-color: #2a2a2a;
  position: relative;
  /* para esconder la coma  inexpicable al final */
  bottom: -1.2em;
`;
const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 80px 40px 30px;
`;
const FooterBotton = styled.div`
  background-color: rgb(34, 34, 34);
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    margin: 0 0.3em;
    width: 32px;
    height: 32px;
    opacity: 1;
    transition: 0.25s all;
  }
  a:hover {
    opacity: 0.8;
  }
  svg {
    width: 21px;
    height: 21px;
    fill: rgb(174, 174, 174);
  }
  p {
    font-size: 11px;
    color: #aeaeae;
    font-family: "Rubik 400";
  }
`;

const CardAccepts = styled.div`
  h3 {
    position: relative;
    color: #fff;
    font-size: 21px;
    font-family: "Rubik 700";
    line-height: 1.3em;
    margin-bottom: 40px;
    &:after {
      content: "";
      background-color: #f2002d;
      position: absolute;
      bottom: -12px;
      left: 0;
      display: block;
      width: 50px;
      height: 2px;
    }
  }
`;
const ListCards = styled.div`
  width: 280px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  span {
    width: 51px;
    height: 32px;
    margin: 8px 6px 0 0;
    background-image: url("/images/Otros/cards.png");
  }

  .american-expresss {
    background-position: 0px 0px;
  }
  .circus {
    background-position: -53px 0;
  }
  .maestro {
    background-position: -105px 0;
  }
  .mastercard {
    background-position: 208px 0;
  }
  .visa {
    background-position: 155px 0;
  }
  .cash-delivery {
    background-position: 103px 0;
  }
  .directy-debit {
    background-position: 51px 0;
  }
  .paypal {
    background-position: 0 -33px;
  }
`;
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
