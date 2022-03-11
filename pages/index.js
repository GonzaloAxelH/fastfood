import styled from "styled-components";
import ItemFood from "../components/Molecules/ItemsFood";
import MiniNav from "../components/Molecules/MiniNav/MiniNav";
import PhoneNav from "../components/Molecules/MiniNav/PhoneNAv";
import NavCategory from "../components/Organims/NavCategory/NavCategory";

import NavTop from "../components/Organims/NavTop/NavTop";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.colorRed};
  font-family: "Rubik 700";
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    color: ${({ theme }) => theme.colors.colorBlue};
  }
`;
export default function Home() {
  return (
    <div>
      <NavTop />
      <NavCategory />
      <MiniNav />
      <PhoneNav />
    </div>
  );
}
