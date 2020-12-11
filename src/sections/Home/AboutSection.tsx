import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { navigate } from "gatsby";

import { responsive, high_resolution } from "../../layouts/responsive";

import Container from "../../components/Container";
import SubTitleEngWhite from "../../components/SubTitleEngWhite";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Description from "../../components/Description";

import img_soulful_edtech_bg from "../../assets/images/Home/img_soulful_edtech_bg.png";
import img_soulful_edtech_bg_2x from "../../assets/images/Home/img_soulful_edtech_bg@2x.png";
import img_seoul from "../../assets/images/Home/img_seoul.png";
import img_seoul_2x from "../../assets/images/Home/img_seoul@2x.png";

const AboutContainer = styled(Container)`
  background-image: url(${img_soulful_edtech_bg});
  @media ${high_resolution} {
    background-image: url(${img_soulful_edtech_bg_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;
`;

const SeoulImg = styled.span`
  width: 32rem;
  height: 7.7rem;

  background-image: url(${img_seoul});
  @media ${high_resolution} {
    background-image: url(${img_seoul_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;

  margin-top: 4.8rem;

  @media ${responsive.conditionForDesktop} {
    width: 52rem;
    height: 12.5rem;
    margin-top: 5rem;
  }
`;

const WhiteDescription = styled(Description)`
  color: white;
`;

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <AboutContainer>
      <Column>
        <Label>{t("HPG-89")}</Label>
        <SubTitleEngWhite style={{ color: "white" }}>
          {t("HPG-90")}
        </SubTitleEngWhite>
        <WhiteDescription style={{ color: "white" }}>
          {t("HPG-1")}
        </WhiteDescription>
        <Button onClick={() => navigate("/About")}>{t("HPG-4")}</Button>
      </Column>
      <SeoulImg />
    </AboutContainer>
  );
}
