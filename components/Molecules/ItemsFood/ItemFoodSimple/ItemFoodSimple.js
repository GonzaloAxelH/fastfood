import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-stars";
const WrapperItem = styled.div`
  position: relative;
  .stars-right {
    position: absolute;
    right: 0;
    top: -10px;
    padding: 1em;
    z-index: 2;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-family: "Rubik 500";
    font-size: 13px;
    margin: 0;
  }
  a:nth-child(2) {
    margin: 2em 0;
    color: #333;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 174px;
  height: 174px;

  border: 1px solid #e5e5e5;

  border-radius: 6px;
  img {
    border-radius: 6px;
  }
`;
export default function ItemFoodSimple({ product }) {
  const { name, imageLocal, stars } = product;
  return (
    <WrapperItem>
      <Link href={`/fastfood/product/${name}`}>
        <a>
          <ImageWrapper>
            <div className="stars-right">
              <ReactStars
                value={parseFloat(stars)}
                onChange={() => console.log("sd")}
                size={16}
                edit={false}
                color2={"#ffd700"}
              />
            </div>
            <Image
              src={`/images/Food/${imageLocal}`}
              layout="fill"
              alt={name}
            />
          </ImageWrapper>
        </a>
      </Link>

      <Link href={`/fastfood/product/${name}`}>
        <a>
          <p>{name}</p>
        </a>
      </Link>
    </WrapperItem>
  );
}
