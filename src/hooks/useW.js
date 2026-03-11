import { useState, useEffect } from "react";

export function useW() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  return {
    w,
    isMobile:  w < 640,
    isTablet:  w >= 640 && w < 1024,
    isDesktop: w >= 1024,
    px: w < 640 ? "1.25rem" : w < 1024 ? "2rem" : "2.5rem",
  };
}
