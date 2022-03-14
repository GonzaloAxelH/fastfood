import { createPortal } from "react-dom";

import { useEffect, useState } from "react";
const Portal = ({ children }) => {
  const [mounted, setmoundet] = useState(false);

  useEffect(() => {
    setmoundet(true);

    return () => setmoundet(false);
  }, []);
  return mounted
    ? createPortal(children, document.getElementById("sliding-cart"))
    : null;
};

export default Portal;
