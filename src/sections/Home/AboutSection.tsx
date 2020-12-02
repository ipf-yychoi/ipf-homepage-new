import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";

import colors from "../../layouts/colors";
import Typography from "../../assets/Typography";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Label from "../../components/Label";
import Button from "../../components/Button";

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

const Column = styled.div`
  flex-direction: column;
  margin: auto 0;
  width: 100%;
`;

const Description = styled.p`
  ${Typography("body", 1.4)};
  color: ${colors.black};
  margin: 24px 0 40px 0;
  width: 100%;

  white-space: pre-wrap;
  word-break: keep-all;
`;

export default function TitleSection() {
  const { t } = useTranslation();
  return (
    <AboutContainer>
      <Column>
        <Label>{t("HPG-89")}</Label>
        <SubTitle style={{ color: "white" }}>{t("HPG-90")}</SubTitle>
        <Description style={{ color: "white" }}>{t("HPG-1")}</Description>
        <Button onClick={() => navigate("/About")}>{t("HPG-4")}</Button>
      </Column>
      <SeoulImg src={img_seoul} alt="SEOUL background" />
    </AboutContainer>
  );
}
