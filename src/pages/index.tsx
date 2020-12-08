import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Helmet } from "react-helmet-async";

import "../layouts/index.css";

import Home from "./Home";

function App() {
  const { language } = useI18next();
  return (
    <>
      <Helmet
        htmlAttributes={{
          language,
        }}
      />
      <Home />
    </>
  );
}

export default App;
