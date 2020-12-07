import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import SubTitleEng from "../../components/SubTitleEng";
import Services from "../../components/Services";
import { ProductImg } from "../../components/ProductImg";

import img_logo_olb from "../../assets/images/Product/img_logo_olb.png";
import img_product_olb from "../../assets/images/Product/img_product_olb.png";

const ContainerStyled = styled(Container)`
  @media only screen and (max-width: 1040px) {
    padding-bottom: 10px;
  }
`;

const DescriptionStyled = styled(Description)`
  width: 381px;
  margin: 0;

  @media only screen and (max-width: 1040px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  margin-bottom: 24px;

  width: 22.1rem;
  height: 4.5rem;
`;

const Title = styled(SubTitleEng)`
  padding: 0 calc((100% - 1040px) / 2);
`;

export default function OLBSection() {
  const { t } = useTranslation();
  return (
    <>
      <Title>{t("HPG-120")}</Title>
      <ContainerStyled>
        <Column>
          <Logo src={img_logo_olb} />
          <DescriptionStyled>{t("HPG-31")}</DescriptionStyled>
          <Services />
        </Column>
        <ProductImg src={img_product_olb} />
      </ContainerStyled>
    </>
  );
}
