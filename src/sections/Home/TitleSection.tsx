import React from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

import colors from "../../layouts/colors";
import Typography from "../../assets/Typography";

import Container from "../../components/Container";

import img_home_video from "../../assets/images/Home/img_home_video.mp4";
import WorldMap from "../../assets/images/Home/img_world_map.inline.svg";

const Title = styled.h1`
  ${Typography("hero")};
  margin: auto 0;
  color: ${colors.black};
  z-index: 2;
  width: 405px;
  font-family: "Roboto", sans-serif;

  @media only screen and (max-width: 1040px) {
    ${Typography("body", 4, 700)};
    margin-top: 80px;
    width: 322px;
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

export default function TitleSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t("HPG-88")}</Title>
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
      {/* <WorldMapStyled /> */}
    </Container>
  );
}
