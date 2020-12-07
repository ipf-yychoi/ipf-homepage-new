import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import Services from "../../components/Services";
import { ProductImg } from "../../components/ProductImg";

import img_product_popreader from "../../assets/images/Product/img_product_popreader.png";
import img_logo_popreader from "../../assets/images/Product/img_logo_popreader.png";

const DescriptionStyled = styled(Description)`
  width: 381px;
  margin: 0;

  @media only screen and (max-width: 1040px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  margin-bottom: 24px;

  width: 19.1rem;
  height: 5.3rem;
`;

export default function PopReaderSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <Column>
        <Logo src={img_logo_popreader} />
        <DescriptionStyled>{t("HPG-35")}</DescriptionStyled>
        <Services />
      </Column>
      <ProductImg src={img_product_popreader} />
    </Container>
  );
}
