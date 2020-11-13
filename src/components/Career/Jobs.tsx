import React from "react";
import styled from "styled-components";

import colors from "../../layouts/colors";

import Text from "../Text";
import Container from "../Container";

import blackArrow from "../../images/Career/blackArrow.png";

const JobsData = [
  {
    type: "마케팅",
    title: "리딩앤 영어교육(B2B) 마케터",
  },
  {
    type: "디자인",
    title: "UI/UX 디자이너",
  },
  {
    type: "개발",
    title: "안드로이드 개발자",
  },
  {
    type: "개발",
    title: "백엔드 개발자",
  },
  {
    type: "개발",
    title: "프론트엔드 개발자",
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

function Jobs() {
  return (
    <Container
      style={{
        backgroundColor: colors.gray1,
      }}
    >
      <div style={{ flexDirection: "column", margin: "120px 65px 120px 0" }}>
        <Text
          theme="subtitle"
          style={{ justifyContent: "center", marginBottom: "64px" }}
        >
          진행 중인 채용
        </Text>

        {Object.keys(JobsData).map(function (key: string, index) {
          return (
            <Wrapper>
              <Text type="body1" style={{ margin: "0 80px 0 0" }}>
                {(JobsData as any)[key].type}
              </Text>
              <Text
                tag="h3"
                type="header2"
                style={{ lineHeight: "27px", margin: "0 591px 0 0" }}
              >
                {(JobsData as any)[key].title}
              </Text>
              <Arrow src={blackArrow} />
            </Wrapper>
          );
        })}
      </div>
    </Container>
  );
}

export default Jobs;
