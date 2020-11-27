import React, { useEffect } from "react";
import { changeLocale } from "gatsby-plugin-intl";
import { navigate } from "gatsby";

import "../layouts/index.css";

import Home from "./Home";

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return "en";
  }

  const lang =
    navigator && navigator.language && navigator.language.split("-")[0];
  if (!lang) return "en";

  switch (lang) {
    case "ko":
      return "";
    default:
      return "en";
  }
};

function App() {
  // useEffect(() => {
  //   const urlLang = getRedirectLanguage();
  //   navigate(`/${urlLang}`);
  // }, []);

  return (
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
}

export default App;
