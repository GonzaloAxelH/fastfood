import styled from "styled-components";
import { ItemNav } from "../components/Atoms/ItemNav";
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
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css"
        rel="stylesheet"
        integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      ></link>
      <NavTop />
    </div>
  );
}
