import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive, high_resolution } from "../../layouts/responsive";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import Services from "../../components/Services";
import { ProductImg } from "../../components/ProductImg";

import img_logo_orc from "../../assets/images/Product/img_logo_orc.png";
import img_logo_orc_2x from "../../assets/images/Product/img_logo_orc@2x.png";
import img_product_orc from "../../assets/images/Product/img_product_orc.png";
import img_product_orc_2x from "../../assets/images/Product/img_product_orc@2x.png";

const ContainerStyled = styled(Container)`
  @media only screen and (max-width: 104rem) {
    padding-bottom: 1rem;
  }
`;

const DescriptionStyled = styled(Description)`
  width: 100%;
  margin: 0;

  @media ${responsive.conditionForDesktop} {
    width: 38.1rem;
  }
`;

const Logo = styled.span`
  margin-bottom: 2.4rem;

  width: 30rem;
  height: 3.3rem;

  background-image: url(${img_logo_orc});
  @media ${high_resolution} {
    background-image: url(${img_logo_orc_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;
`;

const ProductImgStyled = styled(ProductImg)`
  width: 100%;
  height: 20rem;
  background-image: url(${img_product_orc});
  @media ${high_resolution} {
    background-image: url(${img_product_orc_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.conditionForDesktop} {
    width: 60rem;
    height: 37.6rem;
  }
`;

export default function ORCSection() {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      <Column>
        <Logo />
        <DescriptionStyled>{t("HPG-33")}</DescriptionStyled>
        <Services />
      </Column>
      <ProductImgStyled />
    </ContainerStyled>
  );
}
