import styled from "styled-components";
import ItemFood from "../components/Molecules/ItemsFood";
import MiniNav from "../components/Molecules/MiniNav/MiniNav";
import PhoneNav from "../components/Molecules/MiniNav/PhoneNAv";
import NavCategory from "../components/Organims/NavCategory/NavCategory";
import NavTop from "../components/Organims/NavTop/NavTop";
import Navigation from "../components/Templates/Navigation/Navigation";

const WrapperAbsoluteNAvCategory = styled.div`
  position: absolute;
  width: 93vw;
  left: 50%;
  transform: translate(-50%, 0);
  top: 210px;
  z-index: 12;
`;
export default function Home() {
  return (
    <div>
      <Navigation />
      <WrapperAbsoluteNAvCategory>
        <NavCategory />
      </WrapperAbsoluteNAvCategory>
    </div>
  );
}
