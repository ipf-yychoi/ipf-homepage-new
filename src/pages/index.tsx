import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Helmet } from "react-helmet-async";

import "../layouts/index.css";

import favicon from "../assets/images/favicon.ico";

import Home from "./Home";

function App() {
  const { language } = useI18next();
  return (
    <>
      <Helmet
        htmlAttributes={{
          language,
        }}
      >
        <title>iPortfolio</title>
        <link rel="icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <Home />
    </>
  );
}

export default App;
