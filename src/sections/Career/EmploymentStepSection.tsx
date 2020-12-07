import React from "react";
import styled from "styled-components";
import { Translation } from "gatsby-plugin-react-i18next";

import colors from "../../layouts/colors";
import Typography from "../../assets/Typography";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Description from "../../components/Description";
import Column from "../../components/Column";

import img_arrow_down from "../../assets/images/Career/img_arrow_down.png";

const EmploymentStepData = {
  first: {
    title: <Translation>{(t) => t("HPG-69")}</Translation>,
    description: <Translation>{(t) => t("HPG-70")}</Translation>,
  },
  second: {
    title: <Translation>{(t) => t("HPG-71")}</Translation>,
    description: <Translation>{(t) => t("HPG-72")}</Translation>,
    subText: <Translation>{(t) => t("HPG-73")}</Translation>,
  },
  third: {
    title: <Translation>{(t) => t("HPG-74")}</Translation>,
    description: <Translation>{(t) => t("HPG-75")}</Translation>,
  },
  fourth: {
    title: <Translation>{(t) => t("HPG-76")}</Translation>,
    description: <Translation>{(t) => t("HPG-77")}</Translation>,
    subText: <Translation>{(t) => t("HPG-78")}</Translation>,
  },
};

const ContainerStyled = styled(Container)`
  flex-direction: column;
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
  left: 0;
  margin: 32px 0;

  @media only screen and (min-width: 1040px) {
    left: 5%;
    margin: 24px 0;
  }
`;

const Caption = styled.p`
  ${Typography("caption", 400)};

  margin: 24px 0 64px 0;
`;

const JobDescription = styled.p`
  ${Typography("body", 1.6)};
  color: ${colors.black};

  word-break: keep-all;

  @media only screen and (max-width: 1040px) {
    margin-top: 16px;
  }
`;

const SubText = styled(Description)`
  margin: 0;
  color: ${colors.gray4};

  @media only screen and (max-width: 1040px) {
    margin-top: 8px;
  }
`;

const EmploymentStep = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1040px) {
    flex-direction: row;
  }
`;

export default function EmploymentStepSection() {
  return (
    <ContainerStyled>
      <SubTitle>
        <Translation>{(t) => t("HPG-67")}</Translation>,
      </SubTitle>
      <Caption>
        <Translation>{(t) => t("HPG-68")}</Translation>,
      </Caption>
      {Object.keys(EmploymentStepData).map(function (key: string, index) {
        return (
          <div key={key} style={{ width: "100%" }}>
            <EmploymentStep>
              <RedBubble>{(EmploymentStepData as any)[key].title}</RedBubble>
              <Column>
                <JobDescription>
                  {(EmploymentStepData as any)[key].description}
                </JobDescription>
                <SubText>{(EmploymentStepData as any)[key].subText}</SubText>
              </Column>
            </EmploymentStep>
            {key !== "fourth" && <ArrowDown src={img_arrow_down} />}
          </div>
        );
      })}
    </ContainerStyled>
  );
}
