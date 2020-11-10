import React from "react";
import styled from "styled-components";

import colors from "../layouts/colors";

import Header from "../components/Header";
import Container from "../components/Container";
import Text from "../components/Text";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Button from "../components/Button";
import Label from "../components/Label";
import Footer from "../components/Footer";

import iPadPro from "../images/iPadPro.png";
import seoulCity from "../images/seoulCity.png";
import SEOUL from "../images/SEOUL.png";
import productImage from "../images/productImage.png";
import bett2020 from "../images/bett2020.png";
import awards from "../images/awards.png";

const NewsItemComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 336px;
  min-height: 238px;
  padding: 32px;
  border-radius: 16px;
  background-color: white;
`;

type NewsItemProps = {
  label: string;
  header: string;
  description: string;
  date: string;
};

function NewsItem({ label, header, description, date }: NewsItemProps) {
  return (
    <NewsItemComponent>
      <a href="#" />
      <Text
        tag="caption"
        weight="bold"
        style={{ textAlign: "left", margin: "8px 0px", color: colors.primary }}
      >
        {label}
      </Text>
      <Text
        tag="p"
        type="body1"
        weight="bold"
        style={{ letterSpacing: "-0.1px", margin: "8px 0px" }}
      >
        {header}
      </Text>
      <Text tag="p" type="body2" weight="normal" style={{ margin: "8px 0px" }}>
        {description}
      </Text>
      <Text
        tag="caption"
        weight="normal"
        style={{ textAlign: "left", margin: "8px 0px", color: colors.gray4 }}
      >
        {date}
      </Text>
    </NewsItemComponent>
  );
}

const ImageOverLay = styled.div`
  position: relative;
  background-image: url(${bett2020});
  min-width: 1040px;
  min-height: 225px;
  z-index: -1;

  border-radius: 16px;
  filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.12));
  filter: brightness(50%);
`;

function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <Container
        height="640"
        style={{ flexDirection: "row", justifyContent: "center" }}
      >
        <div
          style={{
            position: "relative",
            width: "405px",
            height: "108px",
            whiteSpace: "nowrap",
            margin: "10% 4.5%",
          }}
        >
          <Title>
            Transform Books, <br /> Reform Education
          </Title>
        </div>
        <img
          src={iPadPro}
          style={{
            width: "500px",
            height: "365px",
            margin: "7% 4.5%",
            filter: "drop-shadow(0px 32px 48px rgba(0, 0, 0, 0.16))",
          }}
          alt="iPadPro"
        />
      </Container>
      <Container
        height="553"
        style={{
          backgroundImage: `url(${seoulCity})`,
          backgroundSize: "100% 553px",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "21px",
            margin: "auto 0",
          }}
        >
          <Label>About</Label>
          <SubTitle color="white">Soulful Ed-Tech from Seoul</SubTitle>
          <Text
            tag="p"
            type="body2"
            weight="normal"
            style={{ width: "502px", margin: "24px 0px", color: "white" }}
          >
            아이포트폴리오가 개발한 영어 학습에 최적화된 디지털 학습 플랫폼
            Spindle Books™를 통해 전 세계 70개국 200만 명의 학생들이 영어를
            배웁니다.
          </Text>
          <Button>자세히 보기</Button>
        </div>
        <img
          src={SEOUL}
          style={{
            position: "relative",
            width: "520px",
            height: "220px",
            top: "35%",
          }}
          alt="SEOUL background"
        />
      </Container>
      <Container
        height="752"
        style={{ flexDirection: "row", justifyContent: "center" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "21px",
            margin: "auto 2%",
          }}
        >
          <Label>Product</Label>
          <SubTitle>
            Globally Adopted,
            <br />
            Commercially Proven
          </SubTitle>
          <Text
            tag="p"
            type="body2"
            weight="normal"
            style={{ width: "385px", margin: "24px 0px" }}
          >
            540년 역사의 옥스포드 대학출판부가 선택한 기술! 일본, 중국, 스페인,
            터키 등 해외로 수출되는 우리의 솔루션은 글로벌 시장에서 먼저 인정
            받았습니다.
          </Text>
          <Button>자세히 보기</Button>
        </div>
        <img
          src={productImage}
          style={{
            width: "596px",
            height: "512px",
            position: "relative",
            margin: "10% 2%",
          }}
          alt="Reading& products and awards"
        />
      </Container>
      <Container
        height="685"
        style={{
          backgroundColor: colors.gray1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "21px",
            margin: "auto 0",
          }}
        >
          <Label>News</Label>
          <SubTitle>iPortfolio in the Media</SubTitle>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <NewsItem
              label="헤럴드경제"
              header='"자기주도적 학습 능력을 키워라" 언택트 교육 시대의 학습법은?'
              description="코로나19가 바꿔놓은 일상의 모습 가운데, 그 변화의 양상이 두드러지는 분야가 바로 교육이다. 언택트 교육 시대가 찾아옴에 따라 온라인 교육"
              date="2020.06.23"
            />
            <NewsItem
              label="헤럴드경제"
              header='"자기주도적 학습 능력을 키워라" 언택트 교육 시대의 학습법은?'
              description="코로나19가 바꿔놓은 일상의 모습 가운데, 그 변화의 양상이 두드러지는 분야가 바로 교육이다. 언택트 교육 시대가 찾아옴에 따라 온라인 교육"
              date="2020.06.23"
            />
            <NewsItem
              label="헤럴드경제"
              header='"자기주도적 학습 능력을 키워라" 언택트 교육 시대의 학습법은?'
              description="코로나19가 바꿔놓은 일상의 모습 가운데, 그 변화의 양상이 두드러지는 분야가 바로 교육이다. 언택트 교육 시대가 찾아옴에 따라 온라인 교육"
              date="2020.06.23"
            />
          </div>
          <Button>자세히 보기</Button>
        </div>
      </Container>
      <Container
        height="745"
        style={{
          backgroundColor: colors.black,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "21px",
            margin: "auto 0",
          }}
        >
          <Label>Career</Label>
          <SubTitle color="white">Apply Now and Reform Education!</SubTitle>
          <Text
            tag="p"
            type="body2"
            weight="normal"
            style={{
              width: "557px",
              margin: "24px 0px 40px 0",
              lineHeight: "21px",
              color: "white",
            }}
          >
            글로벌 영어 교육 시장에 신선한 변화의 바람을 함께 일으켜나갈 멋진
            동료들을 기다리고 있습니다.
          </Text>
          <Button>자세히 보기</Button>
        </div>
      </Container>
      <Container height="596" style={{ flexDirection: "column" }}>
        <div
          style={{
            position: "relative",
            maxWidth: "1040px",
            height: "225px",
            margin: "80px auto",
          }}
        >
          <ImageOverLay></ImageOverLay>
          <Text
            tag="h2"
            type="header1"
            weight="bold"
            style={{
              position: "absolute",
              top: "48px",
              left: "56px",
              color: "white",
            }}
          >
            Bett 2020 Highlights
          </Text>
          <Text
            type="body2"
            weight="normal"
            style={{
              position: "absolute",
              width: "520px",
              top: "114px",
              left: "56px",
              color: "white",
            }}
          >
            세계 최대 EdTech 전시회인 BETT 2020이 열린 영국 런던에서
            아이포트폴리오 임직원들이 발견한 88개의 주목할만한 기업들과 직접
            인터뷰한 내용을 보고서로 발간하였습니다. (책자 신청이
            마감되었습니다. PDF 다운로드를 이용해 주시기 바랍니다.)
          </Text>
          <Button
            icon="download"
            style={{ position: "absolute", top: "38%", right: "56px" }}
          >
            PDF 다운로드
          </Button>
        </div>
        <img
          src={awards}
          style={{ width: "672px", height: "91px", margin: "0 auto" }}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
