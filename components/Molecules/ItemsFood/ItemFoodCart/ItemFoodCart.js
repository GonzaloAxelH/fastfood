import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";
const ItemFoodCartContainer = styled.div`
  display: flex;

  a {
    text-decoration: none;
  }
  border-bottom: 1px solid #f1f1f1;
  padding: 10px;
  align-items: flex-start;
  justify-content: space-between;
`;
const InfoProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  align-items: flex-start;
  .name-product {
    font-size: 14px;
    font-family: "Rubik 400";
    color: #333333;
    margin: 0;
  }
`;
const ImageProduct = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 6px;
`;
const ListOptions = styled.div`
  display: flex;

  width: 100%;
  p {
    font-size: 11px;
    font-family: "Rubik 400";
    color: #888888;
    margin: 0;
    span {
      margin-left: 4px;
    }
    span::before {
      content: "$";
      font-size: 10px;
    }
  }
  .option-bold {
    font-family: "Rubik 400";
    color: #333;
    margin: 0.2em 0;
  }
`;
const Prices = styled.div`
  font-size: 14px;
  font-family: "Rubik 500";
  color: #f2002d;
  margin: 0.5em 0;
  span:before {
    content: "$";
    font-size: 11px;
  }
`;
const NegativeAddons = styled.div``;
const ExtraToppings = styled.div``;
const CrustType = styled.div``;
const Cheese = styled.div``;
const Sauce = styled.div``;
const VeggiesGoodStuff = styled.div``;
const Toppings = styled.div``;
const PizzaBuildOptions = styled.div``;

const DeleteProduct = styled.div`
  cursor: pointer;
`;
const AllFoodOptions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
function ItemFoodCart({ itemFood, closeSlidingCart }) {
  const { name, priceUnit, img, quantity, customOptions, feactures } = itemFood;

  return (
    <ItemFoodCartContainer>
      <div onClick={closeSlidingCart}>
        <Link href="/ss">
          <a>
            <ImageProduct>
              <Image src={img} alt={name} width={60} height={60} />
            </ImageProduct>
          </a>
        </Link>
      </div>

      <InfoProduct>
        <div onClick={closeSlidingCart}>
          <Link href="/" onClick={closeSlidingCart}>
            <a>
              <p className="name-product">{name}</p>
            </a>
          </Link>
        </div>
        <ListOptions>
          {feactures && (
            <PizzaBuildOptions>
              {feactures && feactures.crustType && (
                <CrustType>
                  <p className="option-bold">CrustType:</p>
                  {feactures.crustType.map((crustType, index) => {
                    return (
                      <OptionFood
                        key={index}
                        optionName={crustType.name}
                        price={crustType.price}
                      />
                    );
                  })}
                </CrustType>
              )}
              {feactures && feactures.chesse && (
                <Cheese>
                  <p className="option-bold">Chesse:</p>
                  {feactures.chesse.map((che, index) => {
                    return (
                      <OptionFood
                        key={index}
                        optionName={che.name}
                        price={che.price}
                      />
                    );
                  })}
                </Cheese>
              )}
              {feactures && feactures.toppings && (
                <Toppings>
                  <p className="option-bold">Toppings:</p>
                  {feactures.toppings.map((top, index) => {
                    return (
                      <OptionFood
                        key={index}
                        optionName={top.name}
                        price={top.price}
                      />
                    );
                  })}
                </Toppings>
              )}
              {feactures && feactures.veggiesGoodStuff && (
                <VeggiesGoodStuff>
                  <p className="option-bold">Veggies & Good Stuff:</p>
                  {feactures.veggiesGoodStuff.map((veggie, index) => {
                    return (
                      <OptionFood
                        key={index}
                        optionName={veggie.name}
                        price={veggie.price}
                      />
                    );
                  })}
                </VeggiesGoodStuff>
              )}
            </PizzaBuildOptions>
          )}
          {customOptions && (
            <AllFoodOptions>
              {customOptions && customOptions.negativeAddons && (
                <NegativeAddons>
                  <p className="option-bold">Negative Addons:</p>
                  {customOptions.negativeAddons.map((negativeAddon, index) => {
                    return (
                      <OptionFood
                        key={index}
                        optionName={negativeAddon.option}
                        price={negativeAddon.ammount}
                      />
                    );
                  })}
                </NegativeAddons>
              )}
              {customOptions && customOptions.extraToppings && (
                <ExtraToppings>
                  <p className="option-bold">Extra Toppings:</p>
                  {customOptions.extraToppings.map((negativeAddon, index) => {
                    return (
                      <OptionFood
                        key={index}
                        optionName={negativeAddon.option}
                        price={negativeAddon.ammount}
                      />
                    );
                  })}
                </ExtraToppings>
              )}
            </AllFoodOptions>
          )}
        </ListOptions>
        <Prices>
          {quantity} x <span>{priceUnit} </span>
        </Prices>
      </InfoProduct>
      <DeleteProduct>
        <FiTrash2 />
      </DeleteProduct>
    </ItemFoodCartContainer>
  );
}

function OptionFood({ optionName, price }) {
  return (
    <p>
      {optionName}
      <span>
        {price} <sup>.00</sup>
      </span>
    </p>
  );
}

export default ItemFoodCart;
