import { useState, useEffect } from "react";
const useScroll = () => {
  const [offset, setOffset] = useState(0);
  const [scrollVisible, setScrollVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    console.log(offset);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return { offset, setOffset };
};

export default useScroll;
