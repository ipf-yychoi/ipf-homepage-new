import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive, high_resolution } from "../../layouts/responsive";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import SubTitleEng from "../../components/SubTitleEng";
import Services from "../../components/Services";
import { ProductImg } from "../../components/ProductImg";

import img_logo_olb from "../../assets/images/Product/img_logo_olb.png";
import img_logo_olb_2x from "../../assets/images/Product/img_logo_olb@2x.png";
import img_product_olb from "../../assets/images/Product/img_product_olb.png";
import img_product_olb_2x from "../../assets/images/Product/img_product_olb@2x.png";

const ContainerStyled = styled(Container)`
  padding-bottom: 1rem;
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

  width: 22.1rem;
  height: 4.5rem;

  background-image: url(${img_logo_olb});
  @media ${high_resolution} {
    background-image: url(${img_logo_olb_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled(SubTitleEng)`
  padding: 0 calc((100% - 32rem) / 2);

  @media ${responsive.conditionForDesktop} {
    padding: 0 calc((100% - 104rem) / 2);
  }
`;

const ProductImgStyled = styled(ProductImg)`
  width: 100%;
  height: 17.6rem;
  background-image: url(${img_product_olb});
  @media ${high_resolution} {
    background-image: url(${img_product_olb_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.conditionForDesktop} {
    width: 51.1rem;
    height: 33.3rem;
  }
`;

export default function OLBSection() {
  const { t } = useTranslation();
  return (
    <>
      <Title>{t("HPG-120")}</Title>
      <ContainerStyled>
        <Column>
          <Logo />
          <DescriptionStyled>{t("HPG-31")}</DescriptionStyled>
          <Services />
        </Column>
        <ProductImgStyled />
      </ContainerStyled>
    </>
  );
}
