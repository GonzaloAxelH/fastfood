import React from "react";
import {
  nameFormat,
  getNumberPrice,
  getDecimalPrice,
} from "../../../../helpers/cartHelpers";
import ButtonOrderNow from "../../../Atoms/Buttons/Button";
import { BiHeart } from "react-icons/bi";
import { connect } from "react-redux";
import Image from "next/image";
import {
  ItemFoodWrapper,
  ImageWrapper,
  PriceHold,
  BtnFavorite,
  FoodInfo,
} from "./ItemFoodGridStyles.jsx";
import Link from "next/link";
import { FullContext } from "../../../../pages/_app";
import { actionSetProduct } from "../../../../redux/actioncreators/actionsProducts";

function ItemFoodGrid(props) {
  const { setOpenSlidingOrderProduct } = React.useContext(FullContext);
  const { name, price, imageLocal, description } = props.burger;
  const handleClickSetOrderNow = () => {
    props.setProduct(props.burger);
    setOpenSlidingOrderProduct(true);
  };
  return (
    <ItemFoodWrapper>
      <ImageWrapper>
        <PriceHold>
          <span>
            {getNumberPrice(price)}
            <sup>.{getDecimalPrice(price)}</sup>
          </span>
        </PriceHold>
        <BtnFavorite>
          <BiHeart />
        </BtnFavorite>
        <Link href={`/fastfood/product/${nameFormat(name)}`}>
          <a>
            <Image
              src={`/images/Food/${imageLocal}`}
              alt={name}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </a>
        </Link>
      </ImageWrapper>

      <FoodInfo>
        <Link href={`/fastfood/product/${nameFormat(name)}`}>
          <a>
            <p>{name}</p>
          </a>
        </Link>
        <p>{description}</p>
      </FoodInfo>
      <div className="btn-order">
        <ButtonOrderNow type="order" onClick={handleClickSetOrderNow}>
          Order Now
        </ButtonOrderNow>
      </div>
    </ItemFoodWrapper>
  );
}

const mapDispatchToprops = (dispatch) => {
  return {
    setProduct: (product) => {
      dispatch(actionSetProduct(product));
    },
  };
};

export default connect(null, mapDispatchToprops)(ItemFoodGrid);
