import { useState, useEffect } from "react";

export function isMobile() {
  const [mobileView, setMobileView] = useState<boolean>(true);

  function handleResize() {
    if (window.screen.width >= 1040) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }
  }

  useEffect(() => {
    handleResize();

    document.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  });

  return mobileView;
}
