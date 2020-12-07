import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import Services from "../../components/Services";
import { ProductImg } from "../../components/ProductImg";

import img_product_readingn from "../../assets/images/Product/img_product_readingn.png";
import img_logo_readingn from "../../assets/images/Product/img_logo_readingn.png";

const ContainerStyled = styled(Container)`
  @media only screen and (max-width: 1040px) {
    flex-direction: column-reverse;
    padding-bottom: 10px;
  }
`;

const DescriptionStyled = styled(Description)`
  width: 100%;
  margin: 0;

  @media only screen and (min-width: 1040px) {
    width: 381px;
  }
`;

const Logo = styled.img`
  margin-bottom: 24px;

  width: 24.2rem;
  height: 4rem;
`;

export default function ReadingNSection() {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <ProductImg src={img_product_readingn} />
      <Column>
        <Logo src={img_logo_readingn} />
        <DescriptionStyled>{t("HPG-32")}</DescriptionStyled>
        <Services all />
      </Column>
    </ContainerStyled>
  );
}
