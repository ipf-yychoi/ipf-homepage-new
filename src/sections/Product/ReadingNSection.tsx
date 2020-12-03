import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import Services from "../../components/Services";

import img_product_readingn from "../../assets/images/Product/img_product_readingn.png";
import img_logo_readingn from "../../assets/images/Product/img_logo_readingn.png";

const DescriptionStyled = styled(Description)`
  width: 381px;
  margin: 0;
`;

const Logo = styled.img`
  margin-bottom: 24px;

  width: 24.2rem;
  height: 4rem;
`;

export default function ReadingNSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <img src={img_product_readingn} />
      <Column>
        <Logo src={img_logo_readingn} />
        <DescriptionStyled>{t("HPG-32")}</DescriptionStyled>
        <Services all />
      </Column>
    </Container>
  );
}
