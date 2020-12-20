import React from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive, high_resolution } from "../../layouts/responsive";

import colors from "../../layouts/colors";
import Typography from "../../assets/Typography";

import Container from "../../components/Container";

import img_home_main from "../../assets/images/Home/img_home_main.png";
import img_home_main_2x from "../../assets/images/Home/img_home_main@2x.png";
import img_home_main_mobile from "../../assets/images/Home/img_home_main_mobile.png";
import img_home_main_mobile_2x from "../../assets/images/Home/img_home_main_mobile@2x.png";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 635px;
  justify-content: space-between;

  @media ${responsive.conditionForDesktop} {
    height: 720px;
  }
`;

const TitleContainer = styled(Container)`
  height: 100%;
  background-color: ${colors.primary};

  /* @media ${responsive.conditionForTablet} {
    justify-content: center;
  } */

  @media ${responsive.conditionForDesktop} {
    justify-content: space-between;
  }
`;

const TabletImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  @media ${responsive.conditionForDesktop} {
    width: 65%;
    right: 0;
  }
`;

const TabletImg = styled.div`
  height: 100%;
  width: 100%;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;

  background-image: url(${img_home_main_mobile});
  @media ${high_resolution} {
    background-image: url(${img_home_main_mobile_2x});
  }

  @media ${responsive.conditionForDesktop} {
    background-position: center left;
    background-size: cover;
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

export default function TitleSection() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <TitleContainer>
        <Title
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          {t("HPG-88")}
        </Title>
      </TitleContainer>
      <TabletImgContainer>
        <TabletImg
          data-sal="slide-left"
          data-sal-duration="1000"
          data-sal-easing="ease"
        />
      </TabletImgContainer>
    </Wrapper>
  );
}
