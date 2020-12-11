import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive, high_resolution } from "../../layouts/responsive";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";
import { ProductImg } from "../../components/ProductImg";

import img_spindlebooks_logo from "../../assets/images/Product/img_spindlebooks_logo.png";
import img_spindlebooks_logo_2x from "../../assets/images/Product/img_spindlebooks_logo@2x.png";
import img_spindlebooks_ipad from "../../assets/images/Product/img_spindlebooks_ipad.png";
import img_spindlebooks_solutions from "../../assets/images/Product/img_spindlebooks_solutions.png";
import img_spindlebooks_solutions_2x from "../../assets/images/Product/img_spindlebooks_solutions@2x.png";

const DescriptionStyled = styled(Description)`
  width: 100%;
  margin: 0;

  @media ${responsive.conditionForDesktop} {
    width: 38.1rem;
  }
`;

const Logo = styled.img`
  margin-bottom: 2.4rem;

  width: 24rem;
  height: 6rem;

  background-image: url(${img_spindlebooks_logo});
  @media ${high_resolution} {
    background-image: url(${img_spindlebooks_logo_2x});
  }
`;

const Viewers = styled.span`
  width: 100%;
  height: 43.5rem;
  padding-top: 3.2rem;
  background-image: url(${img_spindlebooks_solutions});
  @media ${high_resolution} {
    background-image: url(${img_spindlebooks_solutions_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.conditionForDesktop} {
    padding-top: 8rem;
  }
`;

export default function SpindleBooksSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <Column>
        <Logo src={img_spindlebooks_logo} />
        <DescriptionStyled>{t("HPG-30")}</DescriptionStyled>
      </Column>
      <ProductImg src={img_spindlebooks_ipad} />
      <Viewers />
    </Container>
  );
}
