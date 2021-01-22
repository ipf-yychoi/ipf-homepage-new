import React, { useState, useEffect } from "react";
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

const SwitchLanguageButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

type ButtonProps = {
  lang: string;
};

const ToKOButton = styled.button`
  padding: 0.8rem 1.6rem;
  width: 5.2rem;
  height: 3.7rem;
  background-color: ${colors.gray5};
  border-radius: 8px;
  border: none;
  outline: 0;
  cursor: pointer;
  margin-right: 0.8rem;

  ${Typography("body", 1.4, 700)};

  background-color: ${(props: ButtonProps) =>
    props.lang === "ko" ? "white" : colors.gray5};
  color: ${(props: ButtonProps) =>
    props.lang === "ko" ? colors.black : colors.gray4};

  transition: all 0.1s linear;
  :hover {
    background-color: ${(props: ButtonProps) => props.lang !== "ko" && "white"};
    color: ${(props: ButtonProps) => props.lang !== "ko" && colors.black};
  }

  :active {
    background-color: ${(props: ButtonProps) =>
      props.lang === "ko" ? "white" : colors.gray5};
    color: ${(props: ButtonProps) =>
      props.lang === "ko" ? colors.black : colors.gray4};
  }
`;

const ToENButton = styled(ToKOButton)`
  background-color: ${(props: ButtonProps) =>
    props.lang === "en" ? "white" : colors.gray5};
  color: ${(props: ButtonProps) =>
    props.lang === "en" ? colors.black : colors.gray4};

  transition: all 0.1s linear;
  :hover {
    background-color: ${(props: ButtonProps) => props.lang !== "en" && "white"};
    color: ${(props: ButtonProps) => props.lang !== "en" && colors.black};
  }

  :active {
    background-color: ${(props: ButtonProps) =>
      props.lang === "en" ? "white" : colors.gray5};
    color: ${(props: ButtonProps) =>
      props.lang === "en" ? colors.black : colors.gray4};
  }
`;

export default function Footer() {
  const { language, changeLanguage } = useI18next();
  const [lang, setLang] = useState<string>(language);
  const { t } = useTranslation();

  useEffect(() => {
    changeLanguage(lang);
  }, [lang]);

  const handleOnClick = (lng: string) => {
    setLang(lng);
  };

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
      />
      <ContainerStyled>
        <FooterLeftContainer>
          <Logo />
          <License>© iPortfolio Inc. All rights reserved.</License>
          <SwitchLanguageButtonWrapper>
            <ToKOButton onClick={() => handleOnClick("ko")} lang={lang}>
              KO
            </ToKOButton>
            <ToENButton onClick={() => handleOnClick("en")} lang={lang}>
              EN
            </ToENButton>
          </SwitchLanguageButtonWrapper>
        </FooterLeftContainer>
        <Button
          icon="download"
          href={lang === "en" ? iPortfolio_intro_en : iPortfolio_intro_ko}
        >
          {t("HPG-88")}
        </Button>
      </ContainerStyled>
    </>
  );
}
