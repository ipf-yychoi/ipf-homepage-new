import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Helmet } from "react-helmet-async";

import en_translation from "../assets/translations/en.json";
import ko_translation from "../assets/translations/ko.json";

import "../layouts/index.css";

import Home from "./Home";

const resources = { ...en_translation, ...ko_translation };

const DETECTION_OPTIONS = {
  order: ["navigator"],
};

// i18n
//   .use(detector)
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     detection: DETECTION_OPTIONS,
//     resources,
//     fallbackLng: "ko",
//     supportedLngs: ["en", "ko"],

//     keySeparator: false, // we do not use keys in form messages.welcome

//     interpolation: {
//       escapeValue: false, // react already safes from xss
//     },
//   });

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
