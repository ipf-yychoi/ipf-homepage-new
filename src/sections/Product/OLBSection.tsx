import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import SubTitle from "../../components/SubTitle";
import Services from "../../components/Services";

import img_logo_olb from "../../assets/images/Product/img_logo_olb.png";
import img_product_olb from "../../assets/images/Product/img_product_olb.png";

const DescriptionStyled = styled(Description)`
  width: 381px;
  margin: 0;
`;

const Logo = styled.img`
  margin-bottom: 24px;

  width: 22.1rem;
  height: 4.5rem;
`;

const Title = styled(SubTitle)`
  padding: 0 calc((100% - 1040px) / 2);
`;

export default function OLBSection() {
  const { t } = useTranslation();
  return (
    <>
      <Title>{t("HPG-120")}</Title>
      <Container>
        <Column>
          <Logo src={img_logo_olb} />
          <DescriptionStyled>{t("HPG-31")}</DescriptionStyled>
          <Services />
        </Column>
        <img src={img_product_olb} />
      </Container>
    </>
  );
}
