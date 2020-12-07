import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import colors from "../../layouts/colors";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Label from "../../components/Label";
import Description from "../../components/Description";
import Column from "../../components/Column";

import img_diagram from "../../assets/images/About/img_diagram.png";

const ContainerStyled = styled(Container)`
  background-color: ${colors.gray1};
`;

const DescriptionStyled = styled(Description)`
  margin: 24px 0 auto 0;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 249px;
  }
`;

const CoreValuesImg = styled.img`
  width: 100%;
  margin-top: 64px;

  @media only screen and (min-width: 768px) {
    width: 438px;
  }
`;

const SuTitleStyled = styled(SubTitle)`
  @media only screen and (min-width: 768px) {
    width: 344px;
  }
`;

export default function CoreValuesSection() {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <Column>
        <Label>{t("HPG-101")}</Label>
        <SuTitleStyled>{t("HPG-6")}</SuTitleStyled>
        <DescriptionStyled>{t("HPG-7")}</DescriptionStyled>
      </Column>
      <CoreValuesImg src={img_diagram} />
    </ContainerStyled>
  );
}
