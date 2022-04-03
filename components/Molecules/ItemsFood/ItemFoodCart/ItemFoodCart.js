import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Options } from "../../../Atoms/Options/Options";
import { FullContext } from "../../../../pages/_app";
import {
  ItemFoodCartContainer,
  InfoProduct,
  ListOptions,
  ImageProduct,
  Prices,
} from "./ItemFoodCartStyles";
function ItemFoodCart({ itemFood }) {
  const { name, priceUnit, imageLocal, quantity, customOptions, feactures } =
    itemFood;
  const { setOpenCart } = useContext(FullContext);
  return (
    <ItemFoodCartContainer>
      <div onClick={() => setOpenCart(false)}>
        <Link href={`/fastfood/product/${name}`}>
          <a>
            <ImageProduct>
              <Image
                src={`/images/Food/${imageLocal}`}
                alt={name}
                objectFit="contain"
                width={60}
                height={60}
              />
            </ImageProduct>
          </a>
        </Link>
      </div>

      <InfoProduct>
        <div onClick={() => setOpenCart(false)}>
          <Link href={`/fastfood/product/${name}`}>
            <a>
              <p className="name-product">{name}</p>
            </a>
          </Link>
        </div>
        <ListOptions>
          {customOptions && customOptions.extraToppings && (
            <Options
              title="Extra Toppings:"
              listOptions={customOptions.extraToppings}
            />
          )}
        </ListOptions>
        <Prices>
          {quantity} x <span>{priceUnit} </span>
        </Prices>
      </InfoProduct>
    </ItemFoodCartContainer>
  );
}

export default ItemFoodCart;
