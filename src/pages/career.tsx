import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Header from "../components/Header";
import IntroSection from "../sections/Career/IntroSection";
import CommunitySection from "../sections/Career/CommunitySection";
import GrowthSection from "../sections/Career/GrowthSection";
import BenefitSection from "../sections/Career/BenefitSection";
import EmploymentStepSection from "../sections/Career/EmploymentStepSection";
import JobSection from "../sections/Career/JobSection";
import Footer from "../containers/Footer";

export default function Career() {
  const { t } = useTranslation();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header>{t("HPG-95")}</Header>
      <IntroSection />
      <CommunitySection />
      <GrowthSection />
      <BenefitSection />
      <EmploymentStepSection />
      <JobSection />
      <Footer />
    </div>
  );
}
