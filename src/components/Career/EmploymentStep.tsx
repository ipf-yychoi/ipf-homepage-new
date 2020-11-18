import React from "react";
import styled from "styled-components";

import colors from "../../layouts/colors";
import Typography from "../../Typography";

import arrowDown from "../../images/Career/arrowDown.png";

const EmploymentStepData = {
  first: {
    title: "서류 검토",
    description:
      "채용 공고에 명시된 지원 서류를 jobs@iportfolio.co.kr로 보내주시면 검토를 진행합니다.",
  },
  second: {
    title: "1차 면접",
    description: "1차 면접은 역량 중심의 실무진 면접이 진행됩니다.",
    subText: "*개발자의 경우 1차 면접 이전에 코딩테스트가 진행될 수 있습니다.",
  },
  third: {
    title: "2차 면접",
    description: "2차 면접은 조직 적합도 파악을 위한 경영진 면접이 진행됩니다.",
  },
  fourth: {
    title: "최종 합격",
    description: "최종 합격하면 처우 협의를 거쳐 입사가 확정됩니다.",
    subText: "*경우에 따라 3개월 인턴십이 진행될 수 있습니다.",
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 1040px) / 2);

  margin: 120px 0;

  width: 100%;
`;

const RedBubble = styled.div`
  width: fit-content;
  padding: 16px 32px;

  border-radius: 16px;
  background-color: rgba(239, 80, 48, 0.1);

  margin-right: 32px;

  white-space: nowrap;
  ${Typography("heading2")};
  color: ${colors.primary};
`;

const ArrowDown = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  left: 5%;
  margin: 24px 0;
`;

const Column = styled.div`
  flex-direction: column;
  margin: auto 0;
`;

const Title = styled.h1`
  ${Typography("heading1")};
  line-height: 49px;
  color: ${colors.black};
`;

const Caption = styled.caption`
  ${Typography("caption", 400)};

  margin: 24px 0 64px 0;
`;

const Description = styled.p`
  ${Typography("body", 1)};
  color: ${colors.black};

  word-break: keep-all;
`;

const SubText = styled.p`
  ${Typography("body", 0.875)};
`;

function EmploymentStep() {
  return (
    <Container>
      <Title>채용절차</Title>
      <Caption>*채용절차는 상황에 따라 변동될 수 있습니다.</Caption>
      {Object.keys(EmploymentStepData).map(function (key: string, index) {
        return (
          <div key={key} style={{ width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <RedBubble>{(EmploymentStepData as any)[key].title}</RedBubble>
              <Column>
                <Description>
                  {(EmploymentStepData as any)[key].description}
                </Description>
                <SubText>{(EmploymentStepData as any)[key].subText}</SubText>
              </Column>
            </div>
            {key !== "fourth" && <ArrowDown src={arrowDown} />}
          </div>
        );
      })}
    </Container>
  );
}

export default EmploymentStep;
