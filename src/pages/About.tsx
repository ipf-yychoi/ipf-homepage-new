import React from "react";
import styled from "styled-components";

import colors from "../layouts/colors";
import Typography from "../Typography";

import Header from "../components/Header";
import AboutPhotoCarousel from "../components/About/AboutPhotoCarousel";

import img_diagram from "../images/About/img_diagram.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px calc((100% - 1040px) / 2);

  width: 100%;

  ${Typography("heading1")};
`;

const Label = styled.h3`
  ${Typography("heading2")};
  color: ${colors.primary};
  margin: 0 0 8px 0;
  width: 100%;
`;

const Column = styled.div`
  flex-direction: column;
  margin: auto 0;
`;

const SubTitle = styled.p`
  ${Typography("heading1")};
  line-height: 49px;
`;

const Description = styled.p`
  ${Typography("body", 1.4)};
  color: ${colors.black};
  margin: auto 0;
  width: 70%;
  word-break: keep-all;
`;

export default function About() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header>About</Header>
      <Container style={{ marginBottom: "8px", paddingBottom: 0 }}>
        <Label>Mission</Label>
      </Container>
      <Container style={{ gap: "16px", paddingTop: 0 }}>
        <div style={{ width: "100%", display: "flex" }}>
          <SubTitle>Transform the way people learn and teach English</SubTitle>

          <Description>
            우리는 '철학 있는 기술로 교육을 개혁한다'는 사명하에 영어를 배우고
            가르치는 방식을 효율적으로 바꾸고자 합니다. 전 세계 10억 명 이상의
            영어 학습자들에게 최적의 영어 학습 솔루션을 제시하겠습니다.
          </Description>
        </div>
      </Container>
      <Container style={{ backgroundColor: colors.gray1 }}>
        <Column>
          <Label>Core Values</Label>
          <SubTitle>우리의 3가지 핵심가치</SubTitle>
          <Description style={{ marginTop: "24px", width: "249px" }}>
            목표한 바를 성취하는 실력과 의지, <br />
            동료와의 협업을 통한 동반 성장,
            <br />
            올바르고 정의로운 동기를 가지고 일합니다.
          </Description>
        </Column>
        <img src={img_diagram} />
      </Container>
      <Container>
        <Column>
          <Label>History</Label>
          <SubTitle>
            영어 교육 개혁을 위해 <br />
            10년간 달려왔습니다
          </SubTitle>
        </Column>
      </Container>
      <AboutPhotoCarousel />
    </div>
  );
}
