import styled from "styled-components";
export const WrapperFooter = styled.footer`
  background-color: #2a2a2a;
  position: relative;
  /* para esconder la coma  inexpicable al final */
  bottom: -1.2em;
`;
export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 80px 40px 30px;
`;
export const FooterBotton = styled.div`
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

export const CardAccepts = styled.div`
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
export const ListCards = styled.div`
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
