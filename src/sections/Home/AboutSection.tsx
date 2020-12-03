import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Description from "../../components/Description";

import img_soulful_edtech_bg from "../../assets/images/Home/img_soulful_edtech_bg.png";
import img_seoul from "../../assets/images/Home/img_seoul.png";

const AboutContainer = styled(Container)`
  background-image: url(${img_soulful_edtech_bg});
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 1040px) {
    padding-bottom: 0;
  }
`;

const SeoulImg = styled.img`
  width: 490px;
  height: 190px;
  margin: auto 0;

  @media only screen and (max-width: 1040px) {
    width: 120%;
    position: relative;
    right: 30px;
    margin-top: 48px;
  }
`;

const WhiteSubTitle = styled(SubTitle)`
  color: white;
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
        <WhiteSubTitle style={{ color: "white" }}>{t("HPG-90")}</WhiteSubTitle>
        <WhiteDescription style={{ color: "white" }}>
          {t("HPG-1")}
        </WhiteDescription>
        <Button onClick={() => navigate("/About")}>{t("HPG-4")}</Button>
      </Column>
      <SeoulImg src={img_seoul} alt="SEOUL background" />
    </AboutContainer>
  );
}
