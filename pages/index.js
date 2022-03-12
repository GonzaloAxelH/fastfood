import styled from "styled-components";
import ItemFood from "../components/Molecules/ItemsFood";
import MiniNav from "../components/Molecules/MiniNav/MiniNav";
import PhoneNav from "../components/Molecules/MiniNav/PhoneNAv";
import NavCategory from "../components/Organims/NavCategory/NavCategory";
import NavTop from "../components/Organims/NavTop/NavTop";
import Navigation from "../components/Templates/Navigation/Navigation";
import BannerSlide from "../components/Templates/Banners/BannerSlide";
import { useState, useEffect } from "react";
const WrapperAbsoluteNAvCategory = styled.div`
  position: absolute;
  width: 93vw;
  left: 50%;

  transform: translate(-50%, 0);
  top: 210px;
  z-index: 1;
`;
export default function Home() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <div>
        <Navigation scrollOffset={offset} />
        <WrapperAbsoluteNAvCategory scrollOffset={offset}>
          <NavCategory scrollOffset={offset} />
        </WrapperAbsoluteNAvCategory>
      </div>
      <BannerSlide />
      <h1>Otras secciones</h1>
    </div>
  );
}
