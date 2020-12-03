import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import Services from "../../components/Services";

import img_product_brc from "../../assets/images/Product/img_product_brc.png";
import img_logo_brc from "../../assets/images/Product/img_logo_brc.png";

const DescriptionStyled = styled(Description)`
  width: 381px;
  margin: 0;
`;

const Logo = styled.img`
  margin-bottom: 24px;

  width: 30rem;
  height: 3.6rem;
`;

export default function BRCSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <img src={img_product_brc} />
      <Column>
        <Logo src={img_logo_brc} />
        <DescriptionStyled>{t("HPG-34")}</DescriptionStyled>
        <Services />
      </Column>
    </Container>
  );
}
