import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import colors from "../layouts/colors";
import Typography from "../Typography";

import Button from "./Button";

import img_logo_ipf from "../images/img_logo_ipf.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 1040px) / 2);
  background-color: ${colors.black};

  width: 100%;

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
    padding: 80px calc((100% - 320px) / 2);
  }
`;

const ContactInfoContainer = styled.div`
  ${Typography("body", 1.4)};

  margin: 56px 0 48px 0;
  height: 169px;
`;

const Logo = styled.img`
  width: 80px;
  height: 16px;
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
  height: 169px;
  margin: 56px 0;

  @media only screen and (max-width: 1040px) {
    flex-direction: row;
    width: 100%;
  }
`;

const SwitchLanguageButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

const SwitchLanguageButton = styled.button`
  padding: 8px 16px;
  width: 52px;
  height: 37px;
  background-color: ${colors.gray5};
  border-radius: 8px;
  border: none;
  outline: 0;
  cursor: pointer;

  ${Typography("body", 1.4, 700)};
`;

function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <ContactInfoContainer>
        <Logo src={img_logo_ipf} />
        <ContactInfo>
          대표자 : 김성윤 | 사업자등록번호 : 114-86-85559 <br />
          서울특별시 중구 남대문로 9길 24 11층 <br />
          11F, 24 Namdaemun-ro 9-gil, Jung-gu, Seoul, Korea <br />
          contact@iportfolio.co.kr | +82-505-333-8288
        </ContactInfo>
        <ContactInfo>© iPortfolio Inc. All rights reserved.</ContactInfo>
      </ContactInfoContainer>
      <ButtonsWrapper>
        <Button icon="download">회사소개자료</Button>
        <SwitchLanguageButtonWrapper>
          <SwitchLanguageButton
            onClick={() => changeLanguage("ko")}
            style={{
              backgroundColor: `${
                i18n.language === "ko" ? "white" : colors.gray5
              }`,
              color: `${i18n.language === "ko" ? colors.black : colors.gray4}`,
            }}
          >
            KO
          </SwitchLanguageButton>
          <SwitchLanguageButton
            onClick={() => changeLanguage("en")}
            style={{
              backgroundColor: `${
                i18n.language === "en" ? "white" : colors.gray5
              }`,
              color: `${i18n.language === "en" ? colors.black : colors.gray4}`,
            }}
          >
            EN
          </SwitchLanguageButton>
        </SwitchLanguageButtonWrapper>
      </ButtonsWrapper>
    </Container>
  );
}

export default Footer;
