import React from "react";
import Link from "next/link";
import styled from "styled-components";
const ListWrapper = styled.div`
  padding-left: 3em;
  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-left: 0;
  }

  a {
    text-decoration: none;
  }

  li {
    color: #f5f5f5;
    font-family: "Rubik 400";
    list-style: none;
    font-size: 14px;
    padding: 8px 0;
    transition: 0.3s all;
    display: flex;
    align-items: center;
  }
  li svg {
    width: 18px;
    height: 18px;
    margin-right: 0.3em;
  }
  li:hover {
    transform: translateX(0.5em);
  }
  .no-link {
    color: #aeaeae;
  }
  .no-link:hover {
    transform: translate(0);
  }
  ul {
    padding: 0;
  }

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
      z-index: 2;
    }
  }
`;

export default function ListLinks({ title, links }) {
  return (
    <ListWrapper>
      <h3>{title}</h3>

      <ul>
        {links.map((En, index) => {
          const { Icon, link, name } = En;
          if (link !== null) {
            return (
              <Link key={index} href={link}>
                <a>
                  <li>
                    {Icon && <Icon />}
                    {name}
                  </li>
                </a>
              </Link>
            );
          } else {
            return (
              <li key={index} className="no-link">
                {Icon && <Icon />}
                {name}
              </li>
            );
          }
        })}
      </ul>
    </ListWrapper>
  );
}
