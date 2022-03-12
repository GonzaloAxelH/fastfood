import styled from "styled-components";
export const WrapperItemNav = styled.div`
  position: relative;
  font-size: 13px;
  color: #fff;
  cursor: pointer;
  padding: 0 10px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    font-family: "Rubik 500";
    list-style: none;
    transition: 0.25s all;
    display: flex;
    align-items: center;
  }
  li:hover {
    color: #fcb900;
    svg {
      fill: #fcb900;
    }
  }
  li {
    a {
      text-transform: uppercase;
    }
  }
  svg {
    margin-top: 5px;
    margin-left: 5px;
    color: #fff;
    width: 0.9em;
    height: 0.9em;
  }
  z-index: 999999;
`;
export const WrapperDropdown = styled.div`
  position: absolute;
  color: #000;
  top: 90%;
  left: -5%;
  background: transparent;
  border-radius: 3px;
  width: 200px;
  z-index: 99999;
`;
export const LinkDropdown = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  transition: 0.25s all;

  border-radius: 3px;
  a {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 10px;
    font-family: "Rubik 400";
    color: #000;
    text-decoration: none;
  }
  &:hover {
    background-color: #222222;
    a {
      color: #fff;
    }
  }
`;
