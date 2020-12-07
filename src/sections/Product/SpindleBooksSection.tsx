import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import { ProductImg } from "../../components/ProductImg";

import img_spindlebooks_logo from "../../assets/images/Product/img_spindlebooks_logo.png";
import img_spindlebooks_ipad from "../../assets/images/Product/img_spindlebooks_ipad.png";
import img_viewers from "../../assets/images/Product/img_viewers.png";

const DescriptionStyled = styled(Description)`
  width: 100%;
  margin: 0;

  @media only screen and (min-width: 1040px) {
    width: 381px;
  }
`;

const Logo = styled.img`
  margin-bottom: 24px;

  width: 24rem;
  height: 6rem;
`;

const Viewers = styled.img`
  width: 100%;
  padding-top: 32px;

  @media only screen and (min-width: 1040px) {
    padding-top: 80px;
  }
`;

export default function SpindleBooksSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <Column>
        <Logo src={img_spindlebooks_logo} />
        <DescriptionStyled>{t("HPG-30")}</DescriptionStyled>
      </Column>
      <ProductImg src={img_spindlebooks_ipad} />
      <Viewers src={img_viewers} />
    </Container>
  );
}
