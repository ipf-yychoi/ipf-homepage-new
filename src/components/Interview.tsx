import React from "react";
import styled from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Translation } from "gatsby-plugin-react-i18next";
import { MobileView, BrowserView } from "react-device-detect";

import colors from "../layouts/colors";
import Typography from "../assets/Typography";

import img_arrow_left from "../assets/images/Career/img_arrow_left.png";
import img_arrow_right from "../assets/images/Career/img_arrow_right.png";
import img_interviewee_klee from "../assets/images/Career/img_interviewee_klee.png";
import img_interviewee_bskim from "../assets/images/Career/img_interviewee_bskim.png";
import img_interviewee_jpark from "../assets/images/Career/img_interviewee_jpark.png";
import img_interviewee_chcho from "../assets/images/Career/img_interviewee_chcho.png";
import img_interviewee_tkim from "../assets/images/Career/img_interviewee_tkim.png";

const InterviewData = [
  {
    profile: img_interviewee_klee,
    title: <Translation>{(t) => t("HPG-44")}</Translation>,
    quote: <Translation>{(t) => t("HPG-43")}</Translation>,
  },
  {
    profile: img_interviewee_bskim,
    title: <Translation>{(t) => t("HPG-46")}</Translation>,
    quote: <Translation>{(t) => t("HPG-45")}</Translation>,
  },
  {
    profile: img_interviewee_jpark,
    title: <Translation>{(t) => t("HPG-48")}</Translation>,
    quote: <Translation>{(t) => t("HPG-47")}</Translation>,
  },
  {
    profile: img_interviewee_chcho,
    title: <Translation>{(t) => t("HPG-50")}</Translation>,
    quote: <Translation>{(t) => t("HPG-49")}</Translation>,
  },
  {
    profile: img_interviewee_tkim,
    title: <Translation>{(t) => t("HPG-52")}</Translation>,
    quote: <Translation>{(t) => t("HPG-51")}</Translation>,
  },
];

const Profile = styled.img`
  margin-top: 56px;
  align-self: left;
  width: 80px;
  height: 80px;

  @media only screen and (min-width: 1040px) {
    margin-top: 68px;
    align-self: center;
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${Typography("body")};
`;

const BackButtonWeb = styled(ButtonBack)`
  display: none;
  border: none;
  background-color: transparent;

  @media only screen and (min-width: 1040px) {
    display: block;
  }
`;

const BackButtonMobile = styled(BackButtonWeb)`
  display: block;

  @media only screen and (min-width: 1040px) {
    display: none;
  }
`;

const NextButtonWeb = styled(ButtonNext)`
  border: none;
  background-color: transparent;
  display: none;

  @media only screen and (min-width: 1040px) {
    display: block;
  }
`;

const NextButtonMobile = styled(NextButtonWeb)`
  display: block;

  @media only screen and (min-width: 1040px) {
    display: none;
  }
`;

const Quote = styled.p`
  ${Typography("body")};
  text-align: left;
  margin-top: 24px;

  @media only screen and (min-width: 1040px) {
    padding-left: 80px;
    padding-right: 80px;
    margin-top: 0;
    text-align: center;
  }
`;

const Name = styled.p`
  ${Typography("body", 1.4)}
  color: ${colors.gray4};
  margin-top: 16px;

  display: flex;
  justify-content: left;

  @media only screen and (min-width: 1040px) {
    justify-content: center;
  }
`;

const CarouselProviderStyled = styled(CarouselProvider)`
  background-color: ${colors.gray1};
  padding: 0 calc((100% - 320px) / 2);

  @media only screen and (min-width: 1040px) {
    padding: 0 calc((100% - 1040px) / 2);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  bottom: -20px;

  @media only screen and (min-width: 1040px) {
    justify-content: space-between;
  }
`;

function Interview() {
  return (
    <>
      <BrowserView>
        <CarouselProviderStyled
          naturalSlideWidth={1040}
          naturalSlideHeight={450}
          totalSlides={InterviewData.length}
          infinite
          isPlaying
        >
          <Slider style={{ width: "100%", height: "480px" }}>
            {Object.keys(InterviewData).map(function (key: string, index) {
              return (
                <Slide key={key} index={index}>
                  <QuoteContainer>
                    <Profile src={(InterviewData as any)[key].profile} />
                    <ButtonWrapper>
                      <BackButtonWeb>
                        <img src={img_arrow_left}></img>
                      </BackButtonWeb>
                      <NextButtonWeb>
                        <img src={img_arrow_right}></img>
                      </NextButtonWeb>
                    </ButtonWrapper>
                    <Quote>
                      {(InterviewData as any)[key].quote}
                      <br />
                    </Quote>
                    <Name>{(InterviewData as any)[key].title}</Name>
                    <ButtonWrapper>
                      <BackButtonMobile>
                        <img src={img_arrow_left}></img>
                      </BackButtonMobile>
                      <NextButtonMobile>
                        <img src={img_arrow_right}></img>
                      </NextButtonMobile>
                    </ButtonWrapper>
                  </QuoteContainer>
                </Slide>
              );
            })}
          </Slider>
        </CarouselProviderStyled>
      </BrowserView>
      {/* <MobileView>
        <CarouselProviderStyled
          naturalSlideWidth={1}
          naturalSlideHeight={1.5}
          totalSlides={InterviewData.length}
          infinite
          isPlaying
        >
          <Slider>
            {Object.keys(InterviewData).map(function (key: string, index) {
              return (
                <Slide key={key} index={index}>
                  <QuoteContainer>
                    <Profile src={(InterviewData as any)[key].profile} />
                    <Quote>
                      {(InterviewData as any)[key].quote}
                      <br />
                    </Quote>
                    <Name>{(InterviewData as any)[key].title}</Name>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                      }}
                    >
                      <BackButton>
                        <img src={img_arrow_left}></img>
                      </BackButton>
                      <NextButton>
                        <img src={img_arrow_right}></img>
                      </NextButton>
                    </div>
                  </QuoteContainer>
                </Slide>
              );
            })}
          </Slider>
        </CarouselProviderStyled>
      </MobileView> */}
    </>
  );
}

export default Interview;
