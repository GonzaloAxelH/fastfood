import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
const tempPath = [
  {
    namePath: "HOME",
    link: "/fastfood",
  },
  {
    namePath: "SANDWICHES",
    link: "/fastfood/product-category/sandwiches",
  },
  {
    namePath: "BEF AVOCADO SADNDWICH",
    link: "/fastfood/product-category/sandwiches/",
    disable: true,
  },
];
const PathWrapper = styled.div`
  .slash-visible {
    margin: 0 5px;
  }
  .slash-none {
    display: none;
  }
  a {
    text-decoration: none;
    margin: 0;
    padding: 0;
    cursor: default;
  }
  .item-path-enable-link {
    cursor: pointer;
    color: #000;
    font-size: 11px;
    font-family: "Rubik 400";
    text-transform: uppercase;
  }
  .item-path-disable-link {
    font-size: 11px;
    font-family: "Rubik 400";
    text-transform: uppercase;
    color: #999999;
  }
`;
export default function Path() {
  const [allPath, setAllPath] = useState([]);

  useEffect(() => {
    setAllPath(tempPath);
  }, []);
  return (
    <PathWrapper>
      {allPath.map((path, index) => {
        return (
          <span key={index}>
            <Link href={`${index === allPath.length - 1 ? "#" : path.link}`}>
              <a
                className={`item-path-${
                  index === allPath.length - 1 ? "disable-link" : "enable-link"
                }`}
              >
                <span>{path.namePath}</span>
              </a>
            </Link>
            <span
              className={`slash-${
                index === allPath.length - 1 ? "none" : "visible"
              }`}
            >
              /
            </span>
          </span>
        );
      })}
    </PathWrapper>
  );
}
