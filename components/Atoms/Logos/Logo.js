import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, WrapperLogo, BoxBefore, BoxAfter } from "./Styles.jsx";
export default function Logo({ offset }) {
  return (
    <WrapperLogo offset={offset}>
      <Box offset={offset}>
        <BoxBefore offset={offset} />
        <Link href="/fastfood">
          <a>
            <div className="img">
              <Image
                src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/06/logo-lafka-shop.png"
                blurDataURL="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/06/logo-lafka-shop.png"
                alt="logo-lafka"
                layout="fill"
              />
            </div>
          </a>
        </Link>
        <BoxAfter offset={offset} />
      </Box>
    </WrapperLogo>
  );
}
