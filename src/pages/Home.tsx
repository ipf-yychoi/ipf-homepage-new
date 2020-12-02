import React from "react";
import styled, { keyframes } from "styled-components";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";

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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px calc((100% - 1040px) / 2);
  width: 100%;

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
    padding: 64px calc((100% - 320px) / 2);
  }
`;

const Title = styled.h1`
  ${Typography("hero")};
  margin: auto 0;
  color: ${colors.black};
  z-index: 2;

  @media only screen and (max-width: 1040px) {
    ${Typography("body", 4, 700)};
    margin-top: 80px;
  }
`;

const VideoBackground = styled.div`
  background-color: black;
  border-radius: 32px;
  padding: 16.75px;
  z-index: 2;

  @media only screen and (max-width: 1040px) {
    padding: 10.5px;
    margin: 0 auto;
    margin-top: 40px;
  }
`;

const Video = styled.video`
  width: 445px;
  height: 334px;
  border-radius: 16px;

  @media only screen and (max-width: 1040px) {
    width: 224px;
    height: 200px;
  }
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
  width: 100%;

  white-space: pre-wrap;
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

  @media only screen and (max-width: 1040px) {
    height: 392px;
  }
`;

const AwardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 120px;
  gap: 24px;
  flex-wrap: wrap;
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
  width: 100%;
  height: 460px;
  z-index: 0;
  .olb {
    animation: ${pulse} infinite 4s linear;
  }
`;

const AboutContainer = styled(Container)`
  background-image: url(${img_soulful_edtech_bg});
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 1040px) {
    padding-bottom: 0;
  }
`;

const Bett2020DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Bett2020Column = styled(Column)`
  padding: 49px 56px 0 56px;
  @media only screen and (max-width: 1040px) {
    padding: 32px;
  }
`;

const Bett2020Description = styled(Description)`
  color: white;
  width: 592px;
  @media only screen and (max-width: 1040px) {
    width: 100%;
    height: 100%;
  }
`;

const SeoulImg = styled.img`
  width: 490px;
  height: 190px;
  margin: auto 0;

  @media only screen and (max-width: 1040px) {
    width: 120%;
    position: relative;
    right: 30px;
    margin-top: 48px;
  }
`;

const HomeProductImg = styled.img`
  width: 596px;
  height: 512px;

  @media only screen and (max-width: 1040px) {
    width: 100%;
    height: 275px;
    margin-top: 64px;
  }
`;

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Navigation />
      <Container>
        <Title>Transform Books, Reform Education</Title>
        <VideoBackground>
          <Video
            controls={false}
            muted
            loop
            autoPlay
            style={{ borderRadius: "16px" }}
          >
            <source src={img_home_video} type="video/mp4" />
          </Video>
        </VideoBackground>
        <WorldMapStyled />
      </Container>
      <AboutContainer>
        <Column>
          <Label>About</Label>
          <SubTitle style={{ color: "white" }}>
            Soulful Ed-Tech from Seoul
          </SubTitle>
          <Description style={{ color: "white" }}>{t("HPG-1")}</Description>
          <Button onClick={() => navigate("/About")}>{t("HPG-4")}</Button>
        </Column>
        <SeoulImg src={img_seoul} alt="SEOUL background" />
      </AboutContainer>
      <Container>
        <Column>
          <Label>Product</Label>
          <SubTitle>Globally Adopted, Commercially Proven</SubTitle>
          <Description>{t("HPG-2")}</Description>
          <Button onClick={() => navigate("/Product")}>{t("HPG-4")}</Button>
        </Column>
        <HomeProductImg
          src={img_home_product_image}
          alt="Reading& products and awards"
        />
      </Container>
      <Container style={{ backgroundColor: colors.gray1 }}>
        <Column>
          <Label>News</Label>
          <SubTitle>iPortfolio in the Media</SubTitle>
          <NewsItems />
          <Button onClick={() => navigate("/News")}>{t("HPG-4")}</Button>
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
              color: "white",
            }}
          >
            {t("HPG-3")}
          </Description>
          <Button onClick={() => navigate("/Career")}>{t("HPG-4")}</Button>
        </Column>
      </Container>
      <HomePhotoCarousel />
      {i18n.language === "ko" && (
        <Container style={{ paddingTop: "80px", paddingBottom: 0 }}>
          <Bett2020>
            <Bett2020Column>
              <SubTitle style={{ color: "white" }}>
                Bett 2020 Highlights
              </SubTitle>
              <Bett2020DescriptionWrapper>
                <Bett2020Description>
                  세계 최대 EdTech 전시회인 BETT 2020이 열린 영국 런던에서
                  아이포트폴리오 임직원들이 발견한 88개의 주목할만한 기업들과
                  직접 인터뷰한 내용을 보고서로 발간하였습니다. (책자 신청이
                  마감되었습니다. PDF 다운로드를 이용해 주시기 바랍니다.)
                </Bett2020Description>
                <Button icon="download" style={{ bottom: "15px" }}>
                  PDF 다운로드
                </Button>
              </Bett2020DescriptionWrapper>
            </Bett2020Column>
          </Bett2020>
        </Container>
      )}
      <AwardImageContainer>
        <img src={ic_awarded_aes} />
        <img src={ic_awarded_bett} />
        <img src={ic_awarded_esu} />
        <img src={ic_awarded_edtech} />
        <img src={ic_awarded_aws} />
      </AwardImageContainer>
      <Footer />
    </>
  );
}

export default Home;
