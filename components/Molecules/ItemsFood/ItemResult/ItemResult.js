import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const WrapperItem = styled.div`
  border-radius: 4px;
  margin-top: 1em;
  display: flex;

  img {
  }
  .image-wrapper {
    border-radius: 5px;
    border: 1px solid #f1f1f1;
    position: relative;
    text-decoration: none;
  }
  .info {
    margin-left: 1em;
    p {
      margin: 0.3em 0 0 0;
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
  }
`;
export default function ItemResult({ item }) {
  const convertNameURL = (name) => {
    return name
      .split(" ")
      .map((el) => el.toLowerCase())
      .join("-");
  };

  const { idProduct, img, description, name } = item;
  return (
    <Link href={`/product/${convertNameURL(name)}`}>
      <a>
        <WrapperItem>
          <div className="image-wrapper">
            <Image
              src={img}
              alt={name}
              width={80}
              height={80}
              objectFit="cover"
            />
          </div>

          <div className="info">
            <p>{name}</p>
            <p>{description}</p>
          </div>
        </WrapperItem>
      </a>
    </Link>
  );
}
