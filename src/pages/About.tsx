import React from "react";
import styled from "styled-components";

import colors from "../layouts/colors";
import Typography from "../Typography";

import Header from "../components/Header";
import AboutPhotoCarousel from "../components/About/AboutPhotoCarousel";
import Footer from "../components/Footer";

import img_diagram from "../images/About/img_diagram.png";
import img_vector from "../images/About/img_vector.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px calc((100% - 1040px) / 2);

  width: 100%;

  ${Typography("heading1")};
`;

const History = styled.div`
  display: grid;
  padding: 120px calc((100% - 1040px) / 2);

  grid-template-columns: 1fr 1fr 1fr;
  grid-column: span 3 / -3;
  grid-auto-rows: min-content;

  row-gap: 80px;
  column-gap: 18px;
`;

const Label = styled.h3`
  ${Typography("heading2")};
  color: ${colors.primary};
  margin: 0 0 8px 0;
  width: 100%;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const Column = styled.div`
  display: flex;
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

const Month = styled.div`
  ${Typography("heading1")};
  white-space: nowrap;
`;

const Vector = styled.img`
  margin-left: 8px;
`;

const RedBubble = styled.div`
  width: fit-content;
  padding: 8px 16px;
  margin: 24px 0;

  border-radius: 8px;
  background-color: rgba(239, 80, 48, 0.1);

  margin: 32px 32px 32px 0;

  white-space: nowrap;
  ${Typography("heading2")};
  color: ${colors.primary};
`;

const BulletPoint = styled.li`
  ${Typography("body", 1.6, 400)};
  list-style: disc;
  margin-left: 20px;
  margin-bottom: 8px;
  white-space: nowrap;
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
      <History>
        <Timeline>
          <Month>
            2011
            <Vector src={img_vector} />
          </Month>
          <RedBubble>1월</RedBubble>
          <ul>
            <BulletPoint>아이포트폴리오 설립</BulletPoint>
          </ul>
        </Timeline>
        <Timeline>
          <Month>
            2013
            <Vector src={img_vector} />
          </Month>
          <RedBubble>1월</RedBubble>
          <ul>
            <BulletPoint>
              옥스포드 대학출판부-아이포트폴리오 <br />
              디지털 교과서 사업 계약 체결
            </BulletPoint>
          </ul>
          <RedBubble>8월</RedBubble>
          <ul>
            <BulletPoint>Oxford Learners’ Bookshelf 첫 상용 배포</BulletPoint>
          </ul>
        </Timeline>
        <Timeline>
          <Month>
            2014
            <Vector src={img_vector} />
          </Month>
          <RedBubble>6월</RedBubble>
          <ul>
            <BulletPoint>기술혁신형 중소기업(INNO-BIZ) 확인</BulletPoint>
          </ul>
        </Timeline>
        <Timeline>
          <Month>
            2016
            <Vector src={img_vector} />
          </Month>
          <RedBubble>7월</RedBubble>
          <ul>
            <BulletPoint>
              디지털 리딩 프로그램 READING & <br />
              (리딩앤, 구 EBS리딩클럽) 론칭
            </BulletPoint>
          </ul>
          <RedBubble>9월</RedBubble>
          <ul>
            <BulletPoint>문화체육관광부 장관 표창</BulletPoint>
          </ul>
        </Timeline>
        <Timeline>
          <Month>
            2017
            <Vector src={img_vector} />
          </Month>
          <RedBubble>6월</RedBubble>
          <ul>
            <BulletPoint>우수벤처기업 글로벌 부분 선정</BulletPoint>
            <BulletPoint>서울시 2017년 서울형 강소기업 선정</BulletPoint>
          </ul>
          <RedBubble>7월</RedBubble>
          <ul>
            <BulletPoint>신동방 'POP Reader' 중국 론칭</BulletPoint>
          </ul>
          <RedBubble>8월</RedBubble>
          <ul>
            <BulletPoint>iPortfolio 제주도 워크숍</BulletPoint>
          </ul>
          <RedBubble>12월</RedBubble>
          <ul>
            <BulletPoint>Big Reading Club 중국 론칭</BulletPoint>
          </ul>
        </Timeline>
        <Timeline>
          <Month>
            2018
            <Vector src={img_vector} />
          </Month>
          <RedBubble>9월</RedBubble>
          <ul>
            <BulletPoint>
              서울시 ‘고용환경개선 우수 서울형 강소기업' 인증
            </BulletPoint>
          </ul>
          <RedBubble>12월</RedBubble>
          <ul>
            <BulletPoint>백만불 수출의 탑 수상</BulletPoint>
          </ul>
        </Timeline>
        <Timeline>
          <Month>
            2019
            <Vector src={img_vector} />
          </Month>
          <RedBubble>2월</RedBubble>
          <ul>
            <BulletPoint>AWS EdStart Member 선정</BulletPoint>
          </ul>
          <RedBubble>12월</RedBubble>
          <ul>
            <BulletPoint>Oxford Reading Club 일본/터키 출시</BulletPoint>
          </ul>
        </Timeline>
        <Timeline>
          <Month>
            2020
            <Vector src={img_vector} />
          </Month>
          <RedBubble>1월</RedBubble>
          <ul>
            <BulletPoint>BETT Finalist 선정</BulletPoint>
            <BulletPoint>전 직원 영국 워크숍</BulletPoint>
          </ul>
          <RedBubble>3월</RedBubble>
          <ul>
            <BulletPoint>READING &(리딩앤) 영어코칭센터 오픈</BulletPoint>
            <BulletPoint>김성윤 대표 국가경쟁력대상 수상</BulletPoint>
          </ul>
        </Timeline>
      </History>
      <Footer />
    </div>
  );
}
