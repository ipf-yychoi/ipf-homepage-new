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
import { Translation } from "react-i18next";

import colors from "../../layouts/colors";
import Typography from "../../Typography";

import img_arrow_left from "../../images/Career/img_arrow_left.png";
import img_arrow_right from "../../images/Career/img_arrow_right.png";
import img_interviewee_klee from "../../images/Career/img_interviewee_klee.png";
import img_interviewee_bskim from "../../images/Career/img_interviewee_bskim.png";
import img_interviewee_jpark from "../../images/Career/img_interviewee_jpark.png";
import img_interviewee_chcho from "../../images/Career/img_interviewee_chcho.png";
import img_interviewee_tkim from "../../images/Career/img_interviewee_tkim.png";

const InterviewData = [
  {
    profile: img_interviewee_klee,
    title: <Translation>{(t) => t("HPG-46")}</Translation>,
    quote: <Translation>{(t) => t("HPG-45")}</Translation>,
  },
  {
    profile: img_interviewee_bskim,
    title: <Translation>{(t) => t("HPG-48")}</Translation>,
    quote: <Translation>{(t) => t("HPG-47")}</Translation>,
  },
  {
    profile: img_interviewee_jpark,
    title: <Translation>{(t) => t("HPG-50")}</Translation>,
    quote: <Translation>{(t) => t("HPG-49")}</Translation>,
  },
  {
    profile: img_interviewee_chcho,
    title: <Translation>{(t) => t("HPG-52")}</Translation>,
    quote: <Translation>{(t) => t("HPG-51")}</Translation>,
  },
  {
    profile: img_interviewee_tkim,
    title: <Translation>{(t) => t("HPG-54")}</Translation>,
    quote: <Translation>{(t) => t("HPG-53")}</Translation>,
  },
];

const Profile = styled.img`
  margin-top: 68px;
  align-self: center;
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${Typography("body")};
`;

const BackButton = styled(ButtonBack)`
  border: none;
  background-color: transparent;
`;

const NextButton = styled(ButtonNext)`
  border: none;
  background-color: transparent;
`;

const Quote = styled.p`
  text-align: center;
  justify-content: center;

  padding: 0 80px;
  ${Typography("body")};
`;

const Name = styled.p`
  ${Typography("body", 1.4)}
  color: ${colors.gray4};

  margin-top: 16px;
`;

const CarouselProviderStyled = styled(CarouselProvider)`
  background-color: ${colors.gray1};
  padding: 0px calc((100% - 1040px) / 2);
`;

function Interview() {
  return (
    <CarouselProviderStyled
      naturalSlideWidth={1040}
      naturalSlideHeight={325}
      totalSlides={InterviewData.length}
      infinite
      isPlaying
    >
      <Slider>
        {Object.keys(InterviewData).map(function (key: string, index) {
          return (
            <Slide index={index}>
              <QuoteContainer>
                <Profile src={(InterviewData as any)[key].profile} />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <BackButton>
                    <img src={img_arrow_left}></img>
                  </BackButton>
                  <NextButton>
                    <img src={img_arrow_right}></img>
                  </NextButton>
                </div>
                <Quote>
                  {(InterviewData as any)[key].quote}
                  <br /> <Name>{(InterviewData as any)[key].title}</Name>
                </Quote>
              </QuoteContainer>
            </Slide>
          );
        })}
      </Slider>
    </CarouselProviderStyled>
  );
}

export default Interview;
