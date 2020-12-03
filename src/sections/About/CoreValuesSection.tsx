import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  width: 249px;
`;

const CoreValuesImg = styled.img`
  width: 50%;

  @media only screen and (max-width: 1040px) {
    width: 100%;
  }
`;

export default function CoreValuesSection() {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <Column>
        <Label>{t("HPG-101")}</Label>
        <SubTitle>{t("HPG-6")}</SubTitle>
        <DescriptionStyled>{t("HPG-7")}</DescriptionStyled>
      </Column>
      <CoreValuesImg src={img_diagram} />
    </ContainerStyled>
  );
}
