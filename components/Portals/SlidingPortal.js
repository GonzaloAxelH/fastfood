import { VscChromeClose } from "react-icons/vsc";
import Portal from "./Portal";
import { PortalWrapperAbsolute, ButtonClose } from "./SlidingPortalStyles.jsx";

const PortalSlidingContainer = ({ isOpen, setIsOpen, children }) => {
  return (
    <Portal>
      <PortalWrapperAbsolute isOpen={isOpen}>
        <ButtonClose
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <VscChromeClose />
        </ButtonClose>
        {children}
      </PortalWrapperAbsolute>
    </Portal>
  );
};

export default PortalSlidingContainer;
