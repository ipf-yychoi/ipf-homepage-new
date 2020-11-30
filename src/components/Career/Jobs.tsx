import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import colors from "../../layouts/colors";
import Typography from "../../Typography";

import img_arrow_jobs_right from "../../images/Career/img_arrow_jobs_right.png";

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

const JobItem = styled.button`
  display: flex;
  width: 1040px;
  padding: 40px;
  border: none;
  border-radius: 16px;

  white-space: nowrap;
  background-color: white;
  cursor: pointer;

  margin-bottom: 8px;

  :hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
  }

  :focus {
    background-color: ${colors.gray1};
  }
`;

const Arrow = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  right: 42px;
`;

const TypeOfJob = styled.p`
  ${Typography("body")};
`;

const JobTitle = styled.h3`
  ${Typography("heading2")};
  width: 100%;
  text-align: left;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px calc((100% - 1040px) / 2);

  width: 100%;
  background-color: ${colors.gray1};

  ${Typography("heading1")};
  line-height: 49px;
  color: ${colors.black};
`;

function Jobs() {
  const { t } = useTranslation();
  return (
    <Container>
      {t("HPG-79")}
      <div style={{ marginTop: "64px" }}>
        {Object.keys(JobsData).map(function (key: string, index) {
          let marginRight = "94px";
          if (
            (JobsData as any)[key].type === "마케팅" ||
            (JobsData as any)[key].type === "디자인"
          ) {
            marginRight = "80px";
          }
          return (
            <JobItem>
              <TypeOfJob style={{ marginRight: marginRight }}>
                {(JobsData as any)[key].type}
              </TypeOfJob>
              <JobTitle>{(JobsData as any)[key].title}</JobTitle>
              <Arrow src={img_arrow_jobs_right} />
            </JobItem>
          );
        })}{" "}
      </div>
    </Container>
  );
}

export default Jobs;
