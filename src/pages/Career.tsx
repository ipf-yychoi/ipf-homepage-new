import React from "react";
import styled from "styled-components";

import colors from "../layouts/colors";
import Typography from "../Typography";

import HeaderContainer from "../components/HeaderContainer";
import Container from "../components/Container";
import ImageOverlay from "../components/ImageOverlay";
import Interview from "../components/Career/Interview";
import Benefit from "../components/Career/Benefit";
import EmploymentStep from "../components/Career/EmploymentStep";
import Jobs from "../components/Career/Jobs";
import Footer from "../components/Footer";

import working1 from "../images/working1.png";
import working2 from "../images/working2.png";
import working3 from "../images/working3.png";
import groupPhoto2 from "../images/groupPhoto2.png";
import growth1 from "../images/Career/growth1.png";
import growth2 from "../images/Career/growth2.png";
import growth3 from "../images/Career/growth3.png";

const Image = styled.div`
  width: 336px;
  height: 280px;
  border-radius: 16px;
`;

const SubTitle = styled.h2`
  ${Typography("heading1")};
  line-height: 49px;
  color: ${colors.black};
`;

const Description = styled.div`
  ${Typography("body", 0.875)};
  white-space: nowrap;
`;

const Value = styled.p`
  ${Typography("body", 1, 700)};
  color: white;

  padding: 0px 40px 0 40px;
  position: relative;
  bottom: 250px;
  word-break: keep-all;
`;

export default function Career() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <HeaderContainer title="Career" marginRight="920px" />
      <Container style={{ margin: "120px 0" }}>
        <div
          style={{
            flexDirection: "column",
          }}
        >
          <div style={{ marginRight: "700px" }}>
            <SubTitle>
              우리와 함께 할 <br />
              당신을 기다립니다
            </SubTitle>
            <Description
              style={{
                width: "381px",
                height: "84px",
              }}
            >
              '철학있는 기술'로 영어 교육을 함께 개선해나갈 다양한 분야의
              실력자들을 기다립니다.
            </Description>
          </div>
          <div style={{ display: "flex", gap: "40px" }}>
            <Image>
              <ImageOverlay
                source={working1}
                style={{ borderRadius: "16px" }}
              />
              <Value>
                우리는 자율 기반의 리더십과 전문성을 바탕으로 최고의 성과를
                추구합니다.
              </Value>
            </Image>
            <Image>
              <ImageOverlay
                source={working2}
                style={{ borderRadius: "16px" }}
              />
              <Value>
                우리는 고객과 공감하여 실질적 시장 가치를 창출하고 동료와
                협업하여 함께 성장합니다.
              </Value>
            </Image>
            <Image>
              <ImageOverlay
                source={working3}
                style={{ borderRadius: "16px" }}
              />
              <Value>
                우리는 올바르고 정의로운 동기를 바탕으로 사회에 도움이 되는
                사업을 추구합니다.
              </Value>
            </Image>
          </div>
        </div>
      </Container>
      <Container height="543">
        <ImageOverlay source={groupPhoto2} />
      </Container>
      <Container
        style={{
          position: "relative",
          bottom: "370px",
          height: "0",
        }}
      >
        <div
          style={{
            position: "relative",
            marginRight: "660px",
          }}
        >
          <SubTitle style={{ color: "white" }}>
            좋은 동료는 <br />
            최고의 복지입니다
          </SubTitle>
          <Description style={{ marginTop: "24px", color: "white" }}>
            젊고 열정 있는 동료들로부터 주도적이고 책임감 있게 일하는 모습을
            배웁니다.
          </Description>
        </div>
      </Container>
      <Interview />
      <Container style={{ marginTop: "120px", marginBottom: "120px" }}>
        <div
          style={{
            flexDirection: "column",
          }}
        >
          <div style={{ marginRight: "635px", marginBottom: "64px" }}>
            <SubTitle>동반성장을 추구합니다</SubTitle>
            <Description style={{ width: "461px" }}>
              회사를 위해 일하기에 앞서 자기 자신의 성장을 위해 최선을 다하기를
              기대합니다. 회사의 성장은 그러한 인재들이 모인 자연스러운 결과물일
              것입니다.
            </Description>
          </div>
          <div style={{ display: "flex", gap: "40px" }}>
            <img
              src={growth1}
              style={{
                width: "336px",
                height: "280px",
                borderRadius: "16px",
              }}
            />
            <img
              src={growth2}
              style={{
                width: "336px",
                height: "280px",
                borderRadius: "16px",
              }}
            />
            <img
              src={growth3}
              style={{
                width: "336px",
                height: "280px",
                borderRadius: "16px",
              }}
            />
          </div>
        </div>
      </Container>
      <Benefit />
      <EmploymentStep />
      <Jobs />
      <Footer />
    </div>
  );
}
