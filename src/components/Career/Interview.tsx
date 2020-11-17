import React, { useRef } from "react";
import styled from "styled-components";

import colors from "../../layouts/colors";
import Typography from "../../Typography";

import Container from "../Container";

import arrowLeft from "../../images/Career/arrowLeft.png";
import arrowRight from "../../images/Career/arrowRight.png";
import klee from "../../images/Career/klee.png";
import bskim from "../../images/Career/bskim.png";
import jpark from "../../images/Career/jpark.png";
import chcho from "../../images/Career/chcho.png";
import tkim from "../../images/Career/tkim.png";

const InterviewData = [
  {
    name: "klee",
    title: "Frontend Developer, 이경애 님",
    quote:
      "개발자로서 이상한 말일 수도 있지만 기술은 그냥 도구일 뿐이니까, 사용자에게 정말로 필요한 - 어쩌면 사용자 본인들도 그게 필요한지 잘 모를 - 그런 기능, 서비스를 만들고 싶어요. 우리가 가진 아이디어나 기술을 자랑하는 그런 것 말고요.",
  },
  {
    name: "bskim",
    title: "UI/UX Designer, 김범석 님",
    quote:
      "우리의 서비스를 효율적으로 개선하기 위해 디자인 시스템을 구축하고 있고, 더 좋은 사용자 경험을 만들기 위해 여러 이해관계자들과 함께 노력하고 있어요. 오직 사용자를 위한 바람직한 제품을 디자인하고 싶습니다.",
  },
  {
    name: "jpark",
    title: "Marketer, 박지호 님",
    quote:
      '작더라도 꾸준한, 그리고 지속가능한 캠페인을 통해 서서히 사람들 사이에 알려지는 마케팅을 지향합니다. 그래서 우리 고객들이 영어공부 어떻게 하지 고민이 생겼을 때, 누구나 "리딩앤은 기본으로 해야지"라고 생각하게 만들고 싶습니다.',
  },
  {
    name: "chcho",
    title: "Project Manager, 조창현 님",
    quote:
      "함께 일하는 디자이너, 개발자 등 모든 구성원이 최고의 서비스를 만들고 싶다는 목표를 가지고 있어요. 단순 일이라고 생각해서 주어진 일만 하는 것이 아니라 서로 의견을 주고받아 최고의 서비스를 제공하려고 노력하죠. 좋은 팀원들과 함께 일하기 좋은 환경과 최고의 서비스를 만들어 갈 수 있다는 것이 가장 큰 장점입니다.",
  },
  {
    name: "tkim",
    title: "HR, 김태화 님",
    quote:
      "아이포트폴리오는 ‘좋은 동료는 최고의 복지입니다.’라는 슬로건을 가지고 있어요. 단지 내세울 게 없어서 해당 슬로건을 내세우는게 아니라, 진짜 동료들을 보고 배울 수 있는 것들이 많거든요. 저도 들어와서 다른 부서 분들과도 인사철학에 대해 꾸준히 소통하고, 그로부터 많이 배우고 있어요. 들어오시게 된다면 모든 분들이 느끼실 수 있을거라 생각해요.",
  },
];

const Wrapper = styled.button`
  width: 1040px;
  padding: 40px;
  border: none;
  border-radius: 16px;

  white-space: nowrap;
  background-color: white;
  cursor: pointer;

  display: flex;

  margin-bottom: 8px;
`;

const Arrow = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${Typography("body")};
`;
type QuoteProps = {
  imgSource: string;
  quote: string;
};

const QuoteComponent = ({ imgSource, quote }: QuoteProps) => {
  let src;
  switch (imgSource) {
    case "klee":
      src = klee;
      break;
    case "bskim":
      src = bskim;
      break;
    case "jpark":
      src = jpark;
      break;
    case "chcho":
      src = chcho;
      break;
    case "tkim":
      src = tkim;
      break;
  }

  return (
    <QuoteContainer>
      <img
        src={src}
        style={{
          width: "80px",
          height: "80px",
          marginTop: "68px",
          alignSelf: "center",
        }}
      />
      {quote}
    </QuoteContainer>
  );
};

function Interview() {
  let carousel: any = useRef(null);

  const handleOnChange = ({ currentItem, nextItem }: any) => {
    console.log(currentItem, nextItem);
  };

  const handleClick = () => {
    carousel.goTo(2);
  };
  return (
    <Container height="325px" style={{ backgroundColor: colors.gray1 }}>
      {Object.keys(InterviewData).map(function (key: string, index) {
        console.log((InterviewData as any)[key].name);
        return (
          <QuoteComponent
            imgSource={(InterviewData as any)[key].name}
            quote={(InterviewData as any)[key].quote}
          />
        );
      })}
    </Container>
  );
}

export default Interview;
