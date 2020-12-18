import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import Services from "../../components/Services";
import { ProductImg } from "../../components/ProductImg";

import img_product_brc from "../../assets/images/Product/img_product_brc.png";
import img_logo_brc from "../../assets/images/Product/img_logo_brc.png";

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

  width: 30rem;
  height: 3.6rem;
`;

export default function BRCSection() {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <ProductImg src={img_product_brc} />
      <Column>
        <Logo src={img_logo_brc} />
        <DescriptionStyled>{t("HPG-34")}</DescriptionStyled>
        <Services />
      </Column>
    </ContainerStyled>
  );
}
