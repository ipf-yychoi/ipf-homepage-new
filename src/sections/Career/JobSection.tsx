import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import colors from "../../layouts/colors";
import Typography from "../../assets/Typography";

import Container from "../../components/Container";
import Label from "../../components/Label";

import img_arrow_jobs_right from "../../assets/images/Career/img_arrow_jobs_right.png";

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
  flex-direction: column;
  width: 100%;
  padding: 24px;
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

  @media only screen and (min-width: 1040px) {
    width: 1040px;
    flex-direction: row;
    padding: 40px;
  }
`;

const Arrow = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  right: 42px;
  top: 40px;
`;

const TypeOfJob = styled.p`
  ${Typography("body")};
`;

const LabelStyled = styled(Label)`
  color: ${colors.black};
  width: 100%;
  margin: 0;
  text-align: left;
`;

const ContainerStyled = styled(Container)`
  flex-direction: column;
  background-color: ${colors.gray1};

  ${Typography("heading1")};
  line-height: 49px;
  color: ${colors.black};
`;

export default function JobSection() {
  const { t } = useTranslation();
  return (
    <ContainerStyled>
      {t("HPG-79")}
      <div style={{ marginTop: "64px", width: "100%" }}>
        {Object.keys(JobsData).map(function (key: string, index) {
          let marginRight = "94px";
          if (
            (JobsData as any)[key].type === "마케팅" ||
            (JobsData as any)[key].type === "디자인"
          ) {
            marginRight = "80px";
          }
          return (
            <div style={{ display: "flex" }}>
              <JobItem key={key}>
                <TypeOfJob style={{ marginRight: marginRight }}>
                  {(JobsData as any)[key].type}
                </TypeOfJob>
                <LabelStyled>{(JobsData as any)[key].title}</LabelStyled>
              </JobItem>
              <Arrow src={img_arrow_jobs_right} />
            </div>
          );
        })}
      </div>
    </ContainerStyled>
  );
}
