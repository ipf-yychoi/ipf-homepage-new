import React from "react";
import styled from "styled-components";

import colors from "../../layouts/colors";
import Typography from "../../Typography";

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

const JobsContainer = styled.div`
  flex-direction: column;
  margin: 120px 65px 120px 0;

  justify-content: center;

  ${Typography("heading1")};
  line-height: 49px;
  color: ${colors.black};
`;

const TypeOfJob = styled.p`
  ${Typography("body")};
  margin: 0 80px 0 0;
`;

const JobTitle = styled.h3`
  ${Typography("heading2")};

  margin: 0 581px 0 0;
`;

function Jobs() {
  return (
    <Container
      style={{
        backgroundColor: colors.gray1,
      }}
    >
      <JobsContainer>
        진행 중인 채용
        {Object.keys(JobsData).map(function (key: string, index) {
          return (
            <Wrapper>
              <TypeOfJob>{(JobsData as any)[key].type}</TypeOfJob>
              <JobTitle>{(JobsData as any)[key].title}</JobTitle>
              <Arrow src={blackArrow} />
            </Wrapper>
          );
        })}
      </JobsContainer>
    </Container>
  );
}

export default Jobs;
