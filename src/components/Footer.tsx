import React from "react";
import styled from "styled-components";

import colors from "../layouts/colors";

import Text from "./Text";
import Button from "./Button";

import logo from "../images/grayLogo.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 305px;
  background-color: ${colors.black};
`;

const Image = styled.img`
  width: 80px;
  height: 16px;
`;

function Footer() {
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "auto",
          marginBottom: "auto",
          marginRight: "270px",
        }}
      >
        <Image src={logo} />
        <Text type="body2" style={{ color: colors.gray4, marginTop: "32px" }}>
          대표자 : 김성윤 | 사업자등록번호 : 114-86-85559 <br />
          서울특별시 중구 남대문로 9길 24 11층 <br />
          11F, 24 Namdaemun-ro 9-gil, Jung-gu, Seoul, Korea <br />
          contact@iportfolio.co.kr | +82-505-333-8288 <br />
        </Text>
        <Text type="body2" style={{ color: colors.gray4, marginTop: "16px" }}>
          © iPortfolio Inc. All rights reserved.
        </Text>
      </div>
      <div
        style={{
          position: "relative",
          marginTop: "60px",
          marginLeft: "270px",
        }}
      >
        <Button
          icon="download"
          style={{
            position: "relative",
            width: "200px",
          }}
        >
          회사소개자료
        </Button>
      </div>
    </Wrapper>
  );
}

export default Footer;
