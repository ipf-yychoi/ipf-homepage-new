import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import Services from "../../components/Services";

import img_logo_orc from "../../assets/images/Product/img_logo_orc.png";
import img_product_orc from "../../assets/images/Product/img_product_orc.png";

const DescriptionStyled = styled(Description)`
  width: 381px;
  margin: 0;
`;

const Logo = styled.img`
  margin-bottom: 24px;

  width: 30rem;
  height: 3.3rem;
`;

export default function ORCSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <Column>
        <Logo src={img_logo_orc} />
        <DescriptionStyled>{t("HPG-33")}</DescriptionStyled>
        <Services />
      </Column>
      <img src={img_product_orc} />
    </Container>
  );
}
