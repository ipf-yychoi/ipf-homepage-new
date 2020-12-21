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
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 60rem;
  justify-content: space-between;

  @media ${responsive.conditionForTablet} {
    height: 72rem;
    flex-direction: row;
  }
`;

const TitleContainer = styled(Container)`
  height: 38rem;
  background-color: ${colors.primary};
  padding-bottom: 0;
  justify-content: center;

  @media ${responsive.conditionForTablet} {
    justify-content: space-between;
    height: 100%;
    padding-top: 0;
  }
`;

const TabletImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  padding: 0;
  background-color: ${colors.primary};
  justify-content: center;
  /* overflow: hidden; */

  @media ${responsive.conditionForTablet} {
    padding: 0;
    position: absolute;
  }

  @media ${responsive.conditionForDesktop} {
    padding: 0 calc((100% - 96rem) / 2);
    position: absolute;
  }
`;

const TabletImg = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  /* left: calc((100% - 36rem) / 2); */

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  /* background-position: calc((100% - 36rem) / 2) 40; */

  display: block;
  /* margin-left: auto;
  margin-right: auto; */

  background-image: url(${img_home_main});
  @media ${high_resolution} {
    background-image: url(${img_home_main_2x});
  }

  @media ${responsive.conditionForTablet} {
    position: absolute;
    left: 23rem;
    top: 4.7rem;
  }

  @media ${responsive.conditionForDesktop} {
    left: 27rem;
  }
`;

const Temp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media ${responsive.conditionForDesktop} {
    width: 96rem;
  }
`;

const Title = styled.h1`
  ${Typography("body", 4, 700)};
  line-height: 4.4rem;
  margin-top: 8rem;
  width: 32.2rem;
  color: white;
  z-index: 2;
  font-family: "Roboto", sans-serif;

  @media ${responsive.conditionForTablet} {
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
        <Temp>
          <TabletImg
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-easing="ease"
          />
        </Temp>
      </TabletImgContainer>
    </Wrapper>
  );
}
