import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive, high_resolution } from "../../layouts/responsive";

import colors from "../../layouts/colors";
import Typography from "../../assets/Typography";

import Container from "../../components/Container";

import img_home_video from "../../assets/images/Home/img_home_video.mp4";
import img_home_main from "../../assets/images/Home/img_home_main.png";
import img_home_main_2x from "../../assets/images/Home/img_home_main@2x.png";
import img_home_main_mobile from "../../assets/images/Home/img_home_main_mobile.png";
import img_home_main_mobile_2x from "../../assets/images/Home/img_home_main_mobile@2x.png";

const TitleContainer = styled(Container)`
  height: 540px;
  background-color: ${colors.primary};
  background-repeat: no-repeat;

  background-size: contain;
  background-position: 0 222px;

  background-image: url(${img_home_main_mobile});
  @media ${high_resolution} {
    background-image: url(${img_home_main_mobile_2x});
  }

  @media ${responsive.conditionForTablet} {
    height: 720px;
    background-size: cover;
    background-position: 330px;
    background-image: url(${img_home_main});

    @media ${high_resolution} {
      background-image: url(${img_home_main_2x});
    }
  }
`;

const Title = styled.h1`
  ${Typography("body", 4, 700)};
  line-height: 44px;
  margin-top: 8rem;
  width: 32.2rem;
  color: white;
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

export default function TitleSection() {
  const { t } = useTranslation();

  return (
    <TitleContainer>
      <Title
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        {t("HPG-88")}
      </Title>
    </TitleContainer>
  );
}
