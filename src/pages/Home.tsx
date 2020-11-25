import React from "react";
import styled, { keyframes } from "styled-components";
import { navigate } from "gatsby";

import colors from "../layouts/colors";
import Typography from "../Typography/Typography";

import NewsItems from "../components/Home/NewsItems";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import Footer from "../components/Footer";
import HomePhotoCarousel from "../components/Home/HomePhotoCarousel";
import WorldMap from "../images/Home/img_world_map.inline.svg";

import img_home_video from "../images/Home/img_home_video.mp4";
import img_soulful_edtech_bg from "../images/Home/img_soulful_edtech_bg.png";
import img_seoul from "../images/Home/img_seoul.png";
import img_home_product_image from "../images/Home/img_home_product_image.png";
import img_bett_highlights from "../images/Home/img_bett_highlights.png";
import ic_awarded_aes from "../images/Home/ic_awarded_aes.png";
import ic_awarded_aws from "../images/Home/ic_awarded_aws.png";
import ic_awarded_bett from "../images/Home/ic_awarded_bett.png";
import ic_awarded_edtech from "../images/Home/ic_awarded_edtech.png";
import ic_awarded_esu from "../images/Home/ic_awarded_esu.png";
import pic1 from "../images/Home/pic1.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px calc((100% - 1040px) / 2);
  width: 100%;
`;

const Title = styled.h1`
  ${Typography("hero")};
  margin: auto 0;
  color: ${colors.black};
  z-index: 2;
`;

const VideoBackground = styled.div`
  background-color: black;
  border-radius: 32px;
  padding: 16.75px;
  z-index: 2;
`;

const Column = styled.div`
  flex-direction: column;
  margin: auto 0;
  width: 100%;
`;

const SubTitle = styled.p`
  ${Typography("heading1")};
  color: ${colors.black};
  line-height: 42px;
`;

const Label = styled.h3`
  ${Typography("heading2")};
  color: ${colors.primary};
  margin: 0 0 8px 0;
`;

const Description = styled.p`
  ${Typography("body", 1.4)};
  color: ${colors.black};
  margin: 24px 0 40px 0;

  word-break: keep-all;
`;

const Bett2020 = styled.div`
  display: flex;
  width: 100%;
  height: 225px;
  border-radius: 16px;

  background-image: url(${img_bett_highlights});
  background-repeat: no-repeat;
  background-position: center;
`;

const AwardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
  gap: 24px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
0% {
  fill: ${colors.gray4};
  stroke-width:40px;
  width: 4px;
  height: 4px;
  opacity: 1;
}
100%{
  fill: ${colors.gray1};
  stroke-width:10px;
  width: 30px;
  height: 30px;
  rx: 30px;
  opacity: 0.5;
}
`;

const WorldMapStyled = styled(WorldMap)`
  position: absolute;
  right: 0;

  width: 953px;
  height: 440px;
  z-index: 0;
  .olb {
    animation: ${pulse} infinite 4s linear;
  }
`;

function Home() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Navigation />

      <Container>
        <Title>
          Transform Books, <br /> Reform Education
        </Title>
        <VideoBackground>
          <video
            width="445"
            height="334"
            controls={false}
            muted
            loop
            autoPlay
            style={{ borderRadius: "16px" }}
          >
            <source src={img_home_video} type="video/mp4" />
          </video>
        </VideoBackground>
        <WorldMapStyled />
      </Container>
      <Container
        style={{
          height: "553px",
          backgroundImage: `url(${img_soulful_edtech_bg})`,
        }}
      >
        <Column>
          <Label>About</Label>
          <SubTitle style={{ color: "white" }}>
            Soulful Ed-Tech from Seoul
          </SubTitle>
          <Description style={{ width: "461px", color: "white" }}>
            아이포트폴리오가 개발한 영어 학습에 최적화된 디지털 학습 플랫폼
            Spindle Books™를 통해 전 세계 70개국 200만 명의 학생들이 영어를
            배웁니다.
          </Description>
          <Button onClick={() => navigate("/About")}>자세히 보기</Button>
        </Column>
        <img
          src={img_seoul}
          alt="SEOUL background"
          style={{ width: "490px", height: "190px", margin: "auto 0" }}
        />
      </Container>
      <Container>
        <Column>
          <Label>Product</Label>
          <SubTitle>Globally Adopted, Commercially Proven</SubTitle>
          <Description style={{ width: "385px" }}>
            540년 역사의 옥스포드 대학출판부가 선택한 기술! <br /> 일본, 중국,
            스페인, 터키 등 해외로 수출되는 우리의 솔루션은 글로벌 시장에서 먼저
            인정 받았습니다.
          </Description>
          <Button onClick={() => navigate("/Product")}>자세히 보기</Button>
        </Column>
        <img
          src={img_home_product_image}
          style={{
            width: "596px",
            height: "512px",
          }}
          alt="Reading& products and awards"
        />
      </Container>
      <Container style={{ backgroundColor: colors.gray1 }}>
        <Column>
          <Label>News</Label>
          <SubTitle>iPortfolio in the Media</SubTitle>
          <NewsItems />
          <Button onClick={() => navigate("/News")}>자세히 보기</Button>
        </Column>
      </Container>
      <Container style={{ backgroundColor: colors.black, paddingBottom: 0 }}>
        <Column>
          <Label>Career</Label>
          <SubTitle style={{ color: "white" }}>
            Apply Now and Reform Education!
          </SubTitle>

          <Description
            style={{
              width: "557px",
              color: "white",
            }}
          >
            글로벌 영어 교육 시장에 신선한 변화의 바람을 함께 일으켜나갈 멋진
            동료들을 기다리고 있습니다.
          </Description>
          <Button onClick={() => navigate("/Career")}>자세히 보기</Button>
        </Column>
      </Container>
      <HomePhotoCarousel />

      <Container style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Bett2020>
          <Column style={{ zIndex: 4, padding: "49px 56px 0 56px" }}>
            <SubTitle style={{ color: "white" }}>Bett 2020 Highlights</SubTitle>
            <Description
              style={{
                width: "520px",
                color: "white",
              }}
            >
              세계 최대 EdTech 전시회인 BETT 2020이 열린 영국 런던에서
              아이포트폴리오 임직원들이 발견한 88개의 주목할만한 기업들과 직접
              인터뷰한 내용을 보고서로 발간하였습니다. (책자 신청이
              마감되었습니다. PDF 다운로드를 이용해 주시기 바랍니다.)
            </Description>
          </Column>
          <Button icon="download" style={{ margin: "86px 56px", zIndex: 4 }}>
            PDF 다운로드
          </Button>
        </Bett2020>
      </Container>
      <AwardImageContainer>
        <img src={ic_awarded_aes} />
        <img src={ic_awarded_bett} />
        <img src={ic_awarded_esu} />
        <img src={ic_awarded_edtech} />
        <img src={ic_awarded_aws} />
      </AwardImageContainer>
      <Footer />
    </div>
  );
}

export default Home;
