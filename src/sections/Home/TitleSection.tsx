import React, { useState, useLayoutEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive } from "../../layouts/responsive";

import colors from "../../layouts/colors";
import Typography from "../../assets/Typography";

import Container from "../../components/Container";

import img_home_main from "../../assets/images/Home/img_home_main.png";
import img_home_main_2x from "../../assets/images/Home/img_home_main@2x.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 60rem;
  justify-content: space-between;

  @media ${responsive.conditionForDesktop} {
    height: 72rem;
    flex-direction: row;
  }
`;

const TitleContainer = styled(Container)`
  height: 24.1rem;
  background-color: ${colors.primary};
  padding-bottom: 0;
  overflow: hidden;
  justify-content: center;

  @media ${responsive.conditionForDesktop} {
    justify-content: space-between;
    height: 100%;
    padding-top: 0;
    position: relative;
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

  @media ${responsive.conditionForDesktop} {
    ${Typography("hero")};
    margin: auto 0;
    width: 50%;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; left: 0; }
  to   { opacity: 1; left: -14.5rem; }
`;

const BackgroundImageDesktop = styled.img`
  position: absolute;
  width: auto;
  height: 72rem;
  left: -14.5rem;

  animation: ${fadeIn} 1.5s;
`;

const BackgroundImageMobile = styled.img`
  position: static;
  width: auto;
  height: 100%;
  left: 50%;
  margin-left: -94%;
`;

const BackgroundImageWrapperMobile = styled.div`
  position: relative;
  width: 100%;
  height: 36rem;
  overflow: hidden;
  background-color: ${colors.primary};
  padding: 0 calc((100% - 32rem) / 2);
`;

const BackgroundImageWrapperDesktop = styled.div`
  position: absolute;
  opacity: 1;
  height: 100%;
  width: 100%;
`;

export default function TitleSection() {
  const { t } = useTranslation();

  const [isMobileView, setIsMobileView] = useState<boolean>(true);

  function handleResize() {
    if (window.screen.width >= 1040) {
      setIsMobileView(false);
    } else {
      setIsMobileView(true);
    }
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {!isMobileView && (
          <BackgroundImageWrapperDesktop>
            <BackgroundImageDesktop
              src={img_home_main}
              srcSet={img_home_main_2x}
            />
          </BackgroundImageWrapperDesktop>
        )}
      </TitleContainer>
      {isMobileView && (
        <BackgroundImageWrapperMobile>
          <BackgroundImageMobile
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease"
            src={img_home_main}
            srcSet={img_home_main_2x}
          />
        </BackgroundImageWrapperMobile>
      )}
    </Wrapper>
  );
}
