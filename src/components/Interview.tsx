import React from "react";
import styled, { css } from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Translation } from "gatsby-plugin-react-i18next";

import { responsive, high_resolution } from "../layouts/responsive";

import colors from "../layouts/colors";
import Typography from "../assets/Typography";

import img_arrow_left from "../assets/images/Career/img_arrow_left.png";
import img_arrow_left_2x from "../assets/images/Career/img_arrow_left@2x.png";
import img_arrow_right from "../assets/images/Career/img_arrow_right.png";
import img_arrow_right_2x from "../assets/images/Career/img_arrow_right@2x.png";
import img_interviewee_klee from "../assets/images/Career/img_interviewee_klee.png";
import img_interviewee_klee_2x from "../assets/images/Career/img_interviewee_klee@2x.png";
import img_interviewee_bskim from "../assets/images/Career/img_interviewee_bskim.png";
import img_interviewee_bskim_2x from "../assets/images/Career/img_interviewee_bskim@2x.png";
import img_interviewee_jpark from "../assets/images/Career/img_interviewee_jpark.png";
import img_interviewee_jpark_2x from "../assets/images/Career/img_interviewee_jpark@2x.png";
import img_interviewee_chcho from "../assets/images/Career/img_interviewee_chcho.png";
import img_interviewee_chcho_2x from "../assets/images/Career/img_interviewee_chcho@2x.png";
import img_interviewee_tkim from "../assets/images/Career/img_interviewee_tkim.png";
import img_interviewee_tkim_2x from "../assets/images/Career/img_interviewee_tkim@2x.png";

const InterviewData = [
  {
    profile: "klee",
    title: <Translation>{(t) => t("HPG-44")}</Translation>,
    quote: <Translation>{(t) => t("HPG-43")}</Translation>,
  },
  {
    profile: "bskim",
    title: <Translation>{(t) => t("HPG-46")}</Translation>,
    quote: <Translation>{(t) => t("HPG-45")}</Translation>,
  },
  {
    profile: "jpark",
    title: <Translation>{(t) => t("HPG-48")}</Translation>,
    quote: <Translation>{(t) => t("HPG-47")}</Translation>,
  },
  {
    profile: "chcho",
    title: <Translation>{(t) => t("HPG-50")}</Translation>,
    quote: <Translation>{(t) => t("HPG-49")}</Translation>,
  },
  {
    profile: "tkim",
    title: <Translation>{(t) => t("HPG-52")}</Translation>,
    quote: <Translation>{(t) => t("HPG-51")}</Translation>,
  },
];

const profilePic: any = {
  klee: css`
    background-image: url(${img_interviewee_klee});
    @media ${high_resolution} {
      background-image: url(${img_interviewee_klee_2x});
    }
  `,
  bskim: css`
    background-image: url(${img_interviewee_bskim});
    @media ${high_resolution} {
      background-image: url(${img_interviewee_bskim_2x});
    }
  `,
  jpark: css`
    background-image: url(${img_interviewee_jpark});
    @media ${high_resolution} {
      background-image: url(${img_interviewee_jpark_2x});
    }
  `,
  chcho: css`
    background-image: url(${img_interviewee_chcho});
    @media ${high_resolution} {
      background-image: url(${img_interviewee_chcho_2x});
    }
  `,
  tkim: css`
    background-image: url(${img_interviewee_tkim});
    @media ${high_resolution} {
      background-image: url(${img_interviewee_tkim_2x});
    }
  `,
};

type ProfileProps = {
  profileImg: string;
};

const Profile = styled.span`
  margin-top: 56px;
  align-self: left;
  width: 80px;
  height: 80px;
  background-size: cover;

  background-image: ${(props: ProfileProps) => profilePic[props.profileImg]};
  @media ${responsive.conditionForDesktop} {
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

  width: 4rem;
  height: 4rem;

  background-size: cover;
  background-image: url(${img_arrow_left});
  @media ${high_resolution} {
    background-image: url(${img_arrow_left_2x});
  }

  @media ${responsive.conditionForDesktop} {
    display: block;
  }
`;

const BackButtonMobile = styled(BackButtonWeb)`
  display: block;

  @media ${responsive.conditionForDesktop} {
    display: none;
  }
`;

const NextButtonWeb = styled(ButtonNext)`
  border: none;
  background-color: transparent;
  display: none;

  width: 4rem;
  height: 4rem;

  background-size: cover;
  background-image: url(${img_arrow_right});
  @media ${high_resolution} {
    background-image: url(${img_arrow_right_2x});
  }

  @media ${responsive.conditionForDesktop} {
    display: block;
  }
`;

const NextButtonMobile = styled(NextButtonWeb)`
  display: block;

  @media ${responsive.conditionForDesktop} {
    display: none;
  }
`;

const Quote = styled.p`
  ${Typography("body")};
  text-align: left;
  margin-top: 24px;

  @media ${responsive.conditionForDesktop} {
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

  @media ${responsive.conditionForDesktop} {
    justify-content: center;
  }
`;

const CarouselProviderStyled = styled(CarouselProvider)`
  background-color: ${colors.gray1};
  padding: 0 calc((100% - 320px) / 2);

  @media ${responsive.conditionForDesktop} {
    padding: 0 calc((100% - 1040px) / 2);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  bottom: -20px;

  @media ${responsive.conditionForDesktop} {
    justify-content: space-between;
  }
`;

function Interview() {
  return (
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
                <Profile profileImg={(InterviewData as any)[key].profile} />
                <ButtonWrapper>
                  <BackButtonWeb>
                    <span />
                  </BackButtonWeb>
                  <NextButtonWeb>
                    <span />
                  </NextButtonWeb>
                </ButtonWrapper>
                <Quote>
                  {(InterviewData as any)[key].quote}
                  <br />
                </Quote>
                <Name>{(InterviewData as any)[key].title}</Name>
                <ButtonWrapper>
                  <BackButtonMobile>
                    <span />
                  </BackButtonMobile>
                  <NextButtonMobile>
                    <span />
                  </NextButtonMobile>
                </ButtonWrapper>
              </QuoteContainer>
            </Slide>
          );
        })}
      </Slider>
    </CarouselProviderStyled>
  );
}

export default Interview;
