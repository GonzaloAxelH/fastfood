import React from "react";
import styled from "styled-components";
import SlidingPortal from "../../Portals/SlidingPortal";
import ItemResult from "../../Molecules/ItemsFood/ItemResult/ItemResult";
import { useState, useEffect } from "react";
const WrapperSearch = styled.div`
  margin: auto;
  padding-top: 4em;
  display: flex;
  flex-direction: column;
  height: 100%;

  align-items: center;
  width: calc(100% - 40px);
  max-width: 600px;
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
`;
const FormSearch = styled.form`
  width: 100%;

  input {
    width: 100%;
    background: #f6f6f6;
    border-radius: 4px;
    border: none;
    text-align: center;
    font-family: "Rubik 400";
    padding: 20px 0;
    font-size: 17px;
    font-weight: 500;
    text-align: center;
    width: 100%;
    margin-top: 30px;
    -webkit-transition-delay: 0.5s;
    transition-delay: 0.5s;
  }
  p {
    font-family: "Rubik 400";
    font-size: 12px;
    color: #b1b1b1;
    text-align: center;
  }
`;
const Results = styled.div`
  display: flex;
  width: 100%;
  padding-top: 1em;
  flex-direction: column;
`;

const NotResults = styled.div`
  display: none;
  p {
    margin: 0.2em 0 0 0;
  }
  p:nth-child(1) {
    font-size: 13px;
    font-family: "Rubik 400";
    color: #333;
  }
  p:nth-child(2) {
    font-size: 12px;
    font-family: "Rubik 400";
    color: #666;
  }
`;

const tempResults = [
  {
    idProduct: "sdsdsd",
    img: "/images/Food/bacon-chesseburger.jpg",
    name: "Jalapeno Angus Burger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce",
  },
  {
    idProduct: "2u9fhj279fj",
    img: "/images/Food/bacon-chesseburger.jpg",
    name: "Jalapeno Angus Burger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce",
  },
  {
    idProduct: "4fhj789234hfgt",
    img: "/images/Food/bacon-chesseburger.jpg",
    name: "Jalapeno Angus Burger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce",
  },
  {
    idProduct: "wsfjc94jfdd",
    img: "/images/Food/bacon-chesseburger.jpg",
    name: "Jalapeno Angus Burger",
    description:
      "Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with lettuce",
  },
];

function SlidingSearch({ searchIsOpen, closeSlidingSearch }) {
  return (
    <SlidingPortal isOpen={searchIsOpen} handleClose={closeSlidingSearch}>
      <WrapperSearch>
        <FormSearch>
          <input type="text" placeholder="Search Products" />
          <p>Type and hit Enter to Search</p>
        </FormSearch>
        <Results>
          <NotResults>
            <p>Sorry, no posts matched your criteria</p>
            <p>Please try another search term</p>
          </NotResults>
          {tempResults.map((item) => {
            return <ItemResult key={item.idProduct} item={item} />;
          })}
        </Results>
      </WrapperSearch>
    </SlidingPortal>
  );
}

export default SlidingSearch;
