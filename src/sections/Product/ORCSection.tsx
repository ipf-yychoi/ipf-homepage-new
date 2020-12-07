import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import Services from "../../components/Services";
import { ProductImg } from "../../components/ProductImg";

import img_logo_orc from "../../assets/images/Product/img_logo_orc.png";
import img_product_orc from "../../assets/images/Product/img_product_orc.png";

const ContainerStyled = styled(Container)`
  @media only screen and (max-width: 1040px) {
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
  height: 3.3rem;
`;

export default function ORCSection() {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <Column>
        <Logo src={img_logo_orc} />
        <DescriptionStyled>{t("HPG-33")}</DescriptionStyled>
        <Services />
      </Column>
      <ProductImg src={img_product_orc} />
    </ContainerStyled>
  );
}
