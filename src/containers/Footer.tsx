import React from "react";
import styled from "styled-components";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { Helmet } from "react-helmet-async";

import { responsive, high_resolution } from "../layouts/responsive";

import colors from "../layouts/colors";
import Typography from "../layouts/Typography";

import Button from "../components/Button";
import Container from "../components/Container";

import img_logo_ipf from "../assets/images/img_logo_ipf.png";
import img_logo_ipf_2x from "../assets/images/img_logo_ipf@2x.png";

import iPortfolio_intro_en from "../assets/files/iPortfolio_intro_en.pdf";
import iPortfolio_intro_ko from "../assets/files/iPortfolio_intro_ko.pdf";

const ContainerStyled = styled(Container)`
  background-color: ${colors.black};
  padding-top: 5.6rem;
  padding-bottom: 7.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${responsive.conditionForTablet} {
    padding-bottom: 8rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterLeftContainer = styled.div`
  ${Typography("body", 1.4)};

  height: fit-content;
  margin-bottom: 4rem;

  @media ${responsive.conditionForTablet} {
    margin-bottom: 0;
  }
`;

const Logo = styled.span`
  display: block;
  width: 8rem;
  height: 1.6rem;
  margin-bottom: 1.6rem;

  background-size: cover;
  background-repeat: no-repeat;

  background-image: url(${img_logo_ipf});

  @media ${high_resolution} {
    background-image: url(${img_logo_ipf_2x});
  }
`;

const License = styled.p`
  ${Typography("body", 1.2, 400)};
  color: ${colors.gray4};
  margin-bottom: 2.4rem;
  @media ${responsive.conditionForTablet} {
    margin-bottom: 3.2rem;
  }
`;

export default function Footer() {
  const { language } = useI18next();
  const { t } = useTranslation();

  return (
    <>
      <Helmet
        htmlAttributes={{
          language,
        }}
      />
      <ContainerStyled>
        <FooterLeftContainer>
          <Logo />
          <License>© iPortfolio Inc. All rights reserved.</License>
        </FooterLeftContainer>
        <Button
          icon="download"
          href={language === "en" ? iPortfolio_intro_en : iPortfolio_intro_ko}
          filename={
            language === "en" ? `iPortfolio_intro_en` : `iPortfolio_intro_ko`
          }
        >
          {t("HPG-88")}
        </Button>
      </ContainerStyled>
    </>
  );
}
