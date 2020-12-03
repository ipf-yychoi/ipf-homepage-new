import React from "react";
import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import Footer from "../components/Footer";

import SpindleBooksSection from "../sections/Product/SpindleBooksSection";
import ViewerSection from "../sections/Product/ViewerSection";
import OLBSection from "../sections/Product/OLBSection";
import ReadingNSection from "../sections/Product/ReadingNSection";
import ORCSection from "../sections/Product/ORCSection";
import BRCSection from "../sections/Product/BRCSection";
import PopReaderSection from "../sections/Product/PopReaderSection";

export default function Product() {
  const { t } = useTranslation();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header>{t("HPG-91")}</Header>
      <SpindleBooksSection />
      <ViewerSection />
      <OLBSection />
      <ReadingNSection />
      <ORCSection />
      <BRCSection />
      <PopReaderSection />
      <Footer />
    </div>
  );
}
