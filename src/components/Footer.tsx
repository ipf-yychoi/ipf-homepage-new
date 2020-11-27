import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import { globalHistory } from "@reach/router";

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
`;

const SwitchLanguageButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

const SwitchLanguageButton = styled(Link)`
  padding: 8px 16px;
  background-color: ${colors.gray5};
  border-radius: 8px;

  ${Typography("body", 1.4, 700)};
`;

function Footer() {
  let location = globalHistory.location.pathname;

  const intl = useIntl();
  const locale = intl.locale;
  let KO_path = "/";
  let EN_path = "/en";

  let KO_style = {};
  let EN_style = {};

  if (locale === "ko") {
    KO_style = { backgroundColor: "white" };
  } else {
    EN_style = { backgroundColor: "white" };
  }

  if (
    location.indexOf("About") !== -1 ||
    location.indexOf("Product") !== -1 ||
    location.indexOf("News") !== -1 ||
    location.indexOf("Career") !== -1 ||
    location.indexOf("Contact") !== -1
  ) {
    if (locale === "ko") {
      KO_path = location;
      EN_path = "/en" + location;
    } else if (locale === "/en") {
      EN_path = location;
      KO_path = location.replace("/en", "");
    }
  } else {
    if (locale === "ko") {
      KO_path = "/";
      EN_path = "/en";
    } else if (locale === "en") {
      EN_path = "/en";
      KO_path = "/";
    }
  }

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
            activeStyle={{ backgroundColor: "white" }}
            to={KO_path}
            style={KO_style}
          >
            KO
          </SwitchLanguageButton>
          <SwitchLanguageButton
            activeStyle={{ backgroundColor: "white" }}
            to={EN_path}
            style={EN_style}
          >
            EN
          </SwitchLanguageButton>
        </SwitchLanguageButtonWrapper>
      </ButtonsWrapper>
    </Container>
  );
}

export default Footer;
