import React from "react";

import Link from "next/link";
import { WrapperDropdown, LinkDropdown } from "./Styles.jsx";

export default function Dropdown({ links }) {
  return (
    <WrapperDropdown>
      {links.map((link, key) => {
        return (
          <LinkDropdown key={key}>
            <Link href={link.link}>
              <a>{link.name}</a>
            </Link>
          </LinkDropdown>
        );
      })}
    </WrapperDropdown>
  );
}
