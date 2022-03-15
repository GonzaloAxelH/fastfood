import styled from "styled-components";
const Btnmenu = styled.div`
  display: none;

  right: 1em;
  top: 7em;
  cursor: pointer;
  font-family: "Rubik 400";
  background-color: #fff;
  border-radius: 99px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  justify-content: center;

  box-shadow: 0 0 30px rgb(0 0 0 / 12%);
  -moz-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 0 30px 0 rgb(0 0 0 / 12%);

  @media (max-width: ${(props) => props.theme.screens.desktopL}) {
    display: flex;
    position: absolute;
  }
  z-index: 9999999;
`;
function ButtonMenu({ children, onClick }) {
  return <Btnmenu onClick={onClick}>{children}</Btnmenu>;
}
export default ButtonMenu;
