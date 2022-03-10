import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, WrapperLogo, BoxBefore, BoxAfter } from "./Styles.jsx";
export default function Logo() {
  return (
    <WrapperLogo>
      <Box>
        <BoxBefore />
        <Link href="/">
          <a>
            <div className="img">
              <Image
                src="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/06/logo-lafka-shop.png"
                blurDataURL="https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/06/logo-lafka-shop.png"
                alt="logo-lafka"
                width={110}
                height={110}
              />
            </div>
          </a>
        </Link>
        <BoxAfter />
      </Box>
    </WrapperLogo>
  );
}
