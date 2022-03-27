import {
  AiFillPhone,
  AiTwotonePhone,
  AiTwotoneMail,
  AiOutlineHeatMap,
  AiOutlineFieldTime,
} from "react-icons/ai";

export const LINKS = {
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

export const cards = [
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
