import React from "react";
import styled from "styled-components";
import { Translation } from "gatsby-plugin-react-i18next";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import BenefitItem from "../../containers/BenefitItem";

import colors from "../../layouts/colors";

const WelfareData = {
  profitSharing: {
    title: <Translation>{(t) => t("HPG-56")}</Translation>,
    description:
      "회사의 이익은 직원들 없이는 발생하지 않습니다. 그에 대한 보답으로 순이익의 일부를 전부가 공유하는 문화를 가지고 있습니다.",
  },
  youthBenefits: {
    title: <Translation>{(t) => t("HPG-57")}</Translation>,
    description: "",
  },
  vacation: {
    title: <Translation>{(t) => t("HPG-58")}</Translation>,
    description:
      "휴식은 훌륭한 재충전의 기회입니다. 우리는 휴식의 중요성을 알기에 근로자 휴가지원사업에 참여하여 편의를 제공하고 있습니다.",
  },
  present: {
    title: <Translation>{(t) => t("HPG-59")}</Translation>,
    description: "",
  },
  certificate: {
    title: <Translation>{(t) => t("HPG-60")}</Translation>,
    description: "",
  },
  rent: {
    title: <Translation>{(t) => t("HPG-61")}</Translation>,
    description: "",
  },
  insurance: {
    title: <Translation>{(t) => t("HPG-62")}</Translation>,
    description: "",
  },
  macbook: {
    title: <Translation>{(t) => t("HPG-63")}</Translation>,
    description: "",
  },
  international: {
    title: <Translation>{(t) => t("HPG-64")}</Translation>,
    description: "",
  },
  snackBar: {
    title: <Translation>{(t) => t("HPG-65")}</Translation>,
    description: "",
  },
  motionDesk: {
    title: <Translation>{(t) => t("HPG-66")}</Translation>,
    description: "",
  },
};

const ContainerStyled = styled(Container)`
  flex-direction: column;
  background-color: ${colors.gray1};
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;

  margin-top: 64px;
  gap: 16px;
`;

export default function BenefitSection() {
  return (
    <ContainerStyled>
      <SubTitle>복리후생</SubTitle>
      <Wrapper>
        {Object.keys(WelfareData).map(function (key: string, index) {
          return (
            <BenefitItem
              key={key}
              itemKey={key}
              title={(WelfareData as any)[key].title}
              description={(WelfareData as any)[key].description}
            >
              {(WelfareData as any)[key].title}
            </BenefitItem>
          );
        })}
      </Wrapper>
    </ContainerStyled>
  );
}
