import React from "react";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import { useRouter } from "next/router";
import ArrowDown from "../Icons/ArrowDown";
import { WrapperItemNav } from "./Styles.jsx";
export const ItemNav = ({ label, links, path = "/example" }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <WrapperItemNav
      onClick={() => (!links ? router.push(path) : null)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <li>
        <a>{label}</a>
        <span>{links && <ArrowDown />}</span>
      </li>

      {isOpen && links && <Dropdown links={links} />}
    </WrapperItemNav>
  );
};

ItemNav.propTypes = {
  label: PropTypes.string.isRequired,
};

ItemNav.defaultProps = {};
