import { useState, useEffect } from "react";

export default function useScrollActive() {
  const [scroll, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
}
