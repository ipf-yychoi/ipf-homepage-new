import { useState, useEffect } from "react";

export function isMobile() {
  const [mobileView, setMobileView] = useState<boolean>(true);

  function handleResize() {
    if (window.screen.width >= 768) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }
  }

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return mobileView;
}
