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
    title: "Frontend Developer, 이경애 님",
    quote:
      "개발자로서 이상한 말일 수도 있지만 기술은 그냥 도구일 뿐이니까, 사용자에게 정말로 필요한 - 어쩌면 사용자 본인들도 그게 필요한지 잘 모를 - 그런 기능, 서비스를 만들고 싶어요. 우리가 가진 아이디어나 기술을 자랑하는 그런 것 말고요.",
  },
  {
    profile: img_interviewee_bskim,
    title: "UI/UX Designer, 김범석 님",
    quote:
      "우리의 서비스를 효율적으로 개선하기 위해 디자인 시스템을 구축하고 있고, 더 좋은 사용자 경험을 만들기 위해 여러 이해관계자들과 함께 노력하고 있어요. 오직 사용자를 위한 바람직한 제품을 디자인하고 싶습니다.",
  },
  {
    profile: img_interviewee_jpark,
    title: "Marketer, 박지호 님",
    quote:
      '작더라도 꾸준한, 그리고 지속가능한 캠페인을 통해 서서히 사람들 사이에 알려지는 마케팅을 지향합니다. 그래서 우리 고객들이 영어공부 어떻게 하지 고민이 생겼을 때, 누구나 "리딩앤은 기본으로 해야지"라고 생각하게 만들고 싶습니다.',
  },
  {
    profile: img_interviewee_chcho,
    title: "Project Manager, 조창현 님",
    quote:
      "함께 일하는 디자이너, 개발자 등 모든 구성원이 최고의 서비스를 만들고 싶다는 목표를 가지고 있어요. 단순 일이라고 생각해서 주어진 일만 하는 것이 아니라 서로 의견을 주고받아 최고의 서비스를 제공하려고 노력하죠. 좋은 팀원들과 함께 일하기 좋은 환경과 최고의 서비스를 만들어 갈 수 있다는 것이 가장 큰 장점입니다.",
  },
  {
    profile: img_interviewee_tkim,
    title: "HR, 김태화 님",
    quote:
      "아이포트폴리오는 ‘좋은 동료는 최고의 복지입니다.’라는 슬로건을 가지고 있어요. 단지 내세울 게 없어서 해당 슬로건을 내세우는게 아니라, 진짜 동료들을 보고 배울 수 있는 것들이 많거든요. 저도 들어와서 다른 부서 분들과도 인사철학에 대해 꾸준히 소통하고, 그로부터 많이 배우고 있어요. 들어오시게 된다면 모든 분들이 느끼실 수 있을거라 생각해요.",
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
