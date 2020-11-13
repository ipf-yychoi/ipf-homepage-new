import React from "react";
import styled from "styled-components";

import Container from "../Container";
import Text from "../Text";

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

const RedBubble = styled.div`
  width: fit-content;
  padding: 16px 32px;

  border-radius: 16px;
  background-color: rgba(239, 80, 48, 0.1);

  margin-right: 32px;

  white-space: nowrap;
`;

const ArrowDown = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  left: 7%;
  margin: 24px 0;
`;

function EmploymentStep() {
  return (
    <Container style={{ margin: "120px 0px" }}>
      <div
        style={{
          flexDirection: "column",
          marginRight: "340px",
        }}
      >
        <Text
          theme="subtitle"
          style={{ justifyContent: "center", margin: "0" }}
        >
          채용절차
        </Text>
        <Text
          type="caption"
          style={{ marginTop: "24px", marginBottom: "64px" }}
        >
          *채용절차는 상황에 따라 변동될 수 있습니다.
        </Text>
        {Object.keys(EmploymentStepData).map(function (key: string, index) {
          return (
            <div key={key}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <RedBubble>
                  <Text
                    theme="label"
                    style={{ lineHeight: "27px", margin: "0" }}
                  >
                    {(EmploymentStepData as any)[key].title}
                  </Text>
                </RedBubble>
                <div style={{ flexDirection: "column", margin: "auto 0" }}>
                  <Text type="body1" style={{ margin: "0" }}>
                    {(EmploymentStepData as any)[key].description}
                  </Text>
                  <Text
                    type="body2"
                    style={{ marginTop: "8px", marginBottom: "0" }}
                  >
                    {(EmploymentStepData as any)[key].subText}
                  </Text>
                </div>
              </div>
              {key !== "fourth" && <ArrowDown src={arrowDown} />}
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default EmploymentStep;
