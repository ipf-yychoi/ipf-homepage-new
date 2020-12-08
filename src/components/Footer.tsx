import React from "react";
import styled from "styled-components";

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
  ${Typography("body", 0.875)};

  margin: 56px 0 48px 0;
`;

const Logo = styled.img`
  width: 80px;
  height: 16px;
`;

const ContactInfo = styled.p`
  ${Typography("body", 0.875, 400)};
  color: ${colors.gray4};

  margin: 32px 0;
`;

function Footer() {
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

      <Button icon="download" style={{ marginTop: "56px" }}>
        회사소개자료
      </Button>
    </Container>
  );
}

export default Footer;
