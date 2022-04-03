import Portal from "./Portal";
import { VscChromeClose } from "react-icons/vsc";
import {
  PortalWrapperAbsolute,
  AreaMenu,
  CloseArea,
} from "./MenuLeftPortalStyles";
const PortalMenuLeft = ({ isOpen, handleClose, children }) => {
  return (
    <Portal>
      <PortalWrapperAbsolute isOpen={isOpen}>
        <AreaMenu isOpen={isOpen}>
          <div className="button-close2" onClick={handleClose}>
            <VscChromeClose />
          </div>
          {children}
        </AreaMenu>
        <CloseArea onClick={handleClose}></CloseArea>
      </PortalWrapperAbsolute>
    </Portal>
  );
};

export default PortalMenuLeft;
