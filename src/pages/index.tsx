import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Helmet } from "react-helmet-async";

import "../layouts/index.css";

import favicon from "../assets/images/favicon.ico";
import favicon_16 from "../assets/images/favicon-16x16.png";
import favicon_32 from "../assets/images/favicon-32x32.png";
import favicon_apple from "../assets/images/favicon-apple.png";

import Home from "./HomeTemp";

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
        <meta property="og:title" content="iPortfolio" />
        <meta property="og:url" content="https://company.iportfolio.co.kr/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="As an Ed-Tech startup, iPortfolio aims to transform the way people learn and teach English. iPortfolio envisions to disrupt the global ELT (English Language Teaching) market affecting over 1 billion people around the world learning English as a foreign language."
        />
        <meta
          property="og:image"
          content={"https://company.iportfolio.co.kr/og.png"}
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <link rel="icon" href={favicon} type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href={favicon_apple} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon_32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon_16} />
      </Helmet>
      <Home />
    </>
  );
}

export default App;
