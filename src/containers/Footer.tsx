import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Helmet } from "react-helmet-async";

import { responsive, high_resolution } from "../layouts/responsive";

import colors from "../layouts/colors";
import Typography from "../assets/Typography";

import Button from "../components/Button";

import img_logo_ipf from "../assets/images/img_logo_ipf.png";
import img_logo_ipf_2x from "../assets/images/img_logo_ipf@2x.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 60px calc((100% - 320px) / 2);
  background-color: ${colors.black};

  width: 100%;

  @media ${responsive.conditionForDesktop} {
    flex-direction: row;
    padding: 60px calc((100% - 1040px) / 2);
  }
`;

const ContactInfoContainer = styled.div`
  ${Typography("body", 1.4)};

  margin: 0 0 48px 0;
  height: 169px;
`;

const Logo = styled.span`
  display: block;
  width: 8rem;
  height: 1.6rem;

  background-size: cover;
  background-repeat: no-repeat;

  background-image: url(${img_logo_ipf});

  @media ${high_resolution} {
    background-image: url(${img_logo_ipf_2x});
  }
`;

const ContactInfo = styled.p`
  ${Typography("body", 1.4, 400)};
  color: ${colors.gray4};

  margin: 32px 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${responsive.conditionForDesktop} {
    margin-top: 40px;
  }
`;

const SwitchLanguageButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  margin-top: 0;

  @media ${responsive.conditionForDesktop} {
    justify-content: flex-end;
    margin-top: 79px;
  }
`;

type ButtonProps = {
  lang: string;
};

const ToKOButton = styled.button`
  padding: 8px 16px;
  width: 52px;
  height: 37px;
  background-color: ${colors.gray5};
  border-radius: 8px;
  border: none;
  outline: 0;
  cursor: pointer;

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
      <Container>
        <ContactInfoContainer>
          <Logo />
          <ContactInfo>
            대표자 : 김성윤 | 사업자등록번호 : 114-86-85559 <br />
            서울특별시 중구 남대문로 9길 24 11층 <br />
            11F, 24 Namdaemun-ro 9-gil, Jung-gu, Seoul, Korea <br />
            contact@iportfolio.co.kr | +82-505-333-8288
          </ContactInfo>
          <ContactInfo>© iPortfolio Inc. All rights reserved.</ContactInfo>
        </ContactInfoContainer>
        <ButtonsWrapper>
          <Button icon="download" style={{ marginBottom: "40px" }}>
            회사소개자료
          </Button>
          <SwitchLanguageButtonWrapper>
            <ToKOButton onClick={() => handleOnClick("ko")} lang={lang}>
              KO
            </ToKOButton>
            <ToENButton onClick={() => handleOnClick("en")} lang={lang}>
              EN
            </ToENButton>
          </SwitchLanguageButtonWrapper>
        </ButtonsWrapper>
      </Container>
    </>
  );
}
