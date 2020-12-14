import React from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive } from "../../layouts/responsive";

import colors from "../../layouts/colors";
import Typography from "../../assets/Typography";

import Container from "../../components/Container";

import img_home_video from "../../assets/images/Home/img_home_video.mp4";
import WorldMap from "../../assets/images/Home/img_world_map.inline.svg";

const Title = styled.h1`
  ${Typography("body", 4, 700)};
  margin-top: 8rem;
  width: 32.2rem;
  color: ${colors.black};
  z-index: 2;
  font-family: "Roboto", sans-serif;

  @media ${responsive.conditionForDesktop} {
    ${Typography("hero")};
    margin: auto 0;
    width: 40.5rem;
  }
`;

const VideoBackground = styled.div`
  padding: 1.05rem;
  margin: 0 auto;
  margin-top: 4rem;

  background-color: black;
  border-radius: 3.2rem;
  z-index: 2;

  @media ${responsive.conditionForDesktop} {
    padding: 1.675rem;
    margin: 0;
  }
`;

const Video = styled.video`
  width: 22.4rem;
  height: 20rem;
  border-radius: 1.6rem;

  @media ${responsive.conditionForDesktop} {
    width: 44.5rem;
    height: 33.4rem;
  }
`;

const pulse = keyframes`
0% {
  fill: ${colors.gray4};
  stroke-width:4rem;
  width: 0.4rem;
  height: 0.4rem;
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
      <Title
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        {t("HPG-88")}
      </Title>
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
