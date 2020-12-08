import React from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import colors from "../../layouts/colors";
import Typography from "../../assets/Typography";

import Container from "../../components/Container";

import img_home_video from "../../assets/images/Home/img_home_video.mp4";
import WorldMap from "../../assets/images/Home/img_world_map.inline.svg";

const Title = styled.h1`
  ${Typography("body", 4, 700)};
  margin-top: 80px;
  width: 322px;
  color: ${colors.black};
  z-index: 2;
  font-family: "Roboto", sans-serif;

  @media only screen and (min-width: 768px) {
    ${Typography("hero")};
    margin: auto 0;
    width: 405px;
  }
`;

const VideoBackground = styled.div`
  padding: 10.5px;
  margin: 0 auto;
  margin-top: 40px;

  background-color: black;
  border-radius: 32px;
  z-index: 2;

  @media only screen and (min-width: 768px) {
    padding: 16.75px;
    margin: 0;
  }
`;

const Video = styled.video`
  width: 224px;
  height: 200px;
  border-radius: 16px;

  @media only screen and (min-width: 768px) {
    width: 445px;
    height: 334px;
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
