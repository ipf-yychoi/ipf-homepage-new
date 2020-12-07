import React from "react";
import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import MissionSection from "../sections/About/MissionSection";
import CoreValuesSection from "../sections/About/CoreValuesSection";
import HistorySection from "../sections/About/HistorySection";
import Footer from "../containers/Footer";

export default function About() {
  const { t } = useTranslation();

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header>{t("HPG-89")}</Header>
      <MissionSection />
      <CoreValuesSection />
      <HistorySection />
      <Footer />
    </div>
  );
}
