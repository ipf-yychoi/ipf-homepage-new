import React from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import en_translation from "../assets/translations/en.json";
import ko_translation from "../assets/translations/ko.json";

import "../layouts/index.css";

import Home from "./Home";

const resources = { ...en_translation, ...ko_translation };

const DETECTION_OPTIONS = {
  order: ["navigator"],
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: DETECTION_OPTIONS,
    resources,
    fallbackLng: "ko",
    supportedLngs: ["en", "ko"],

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

function App() {
  console.log(i18n.language);
  document.documentElement.lang = i18n.language;
  return (
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
}

export default App;
