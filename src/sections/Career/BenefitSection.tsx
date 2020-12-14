import React from "react";
import styled from "styled-components";
import { Translation, useI18next } from "gatsby-plugin-react-i18next";

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
    description:
      "급여에 더하여 외부에서 지급될 수 있는 보상은 최대한 챙겨드리고자 합니다. 아이포트폴리오인 개개인의 총 보상 최대화를 추구합니다.",
  },
  vacation: {
    title: <Translation>{(t) => t("HPG-58")}</Translation>,
    description:
      "휴식은 훌륭한 재충전의 기회입니다. 우리는 휴식의 중요성을 알기에 근로자 휴가지원사업에 참여하여 편의를 제공하고 있습니다.",
  },
  present: {
    title: <Translation>{(t) => t("HPG-59")}</Translation>,
    description:
      "생일, 명절, 경조사 등은 직원에게 발생하는 하나의 이벤트입니다. 아이포트폴리오인들의 이벤트에 여러가지 도움을 주고자 합니다.",
  },
  certificate: {
    title: <Translation>{(t) => t("HPG-60")}</Translation>,
    description:
      "학습하는 조직이 성장할 수 있습니다. 아이포트폴리오인들의 역량개발을 적극적으로 지원하며, 개인과 조직의 동반성장을 권장합니다.",
  },
  rent: {
    title: <Translation>{(t) => t("HPG-61")}</Translation>,
    description:
      "주거가 안정되어야 마음이 편해지고, 생산성 역시 높아집니다. 따라서 1천만원 한도로 임대차보증금 무이자 대여를 진행하고 있습니다.",
  },
  insurance: {
    title: <Translation>{(t) => t("HPG-62")}</Translation>,
    description:
      "직원의 아픔은 회사의 아픔이기도 합니다. 아이포트폴리오인들이 아픔에 큰 부담을 느끼지 않도록, 단체 상해/실손보험으로 지원합니다.",
  },
  macbook: {
    title: <Translation>{(t) => t("HPG-63")}</Translation>,
    description:
      "업무를 하는데 필요한 도구가 있다면 최대한 제공합니다. 도구의 문제로 일을 할 수 없는 상황을 만들지 않습니다.",
  },
  team: {
    title: <Translation>{(t) => t("HPG-64")}</Translation>,
    description:
      "출근하고 싶은 회사가 좋은 회사입니다. 다양한 팀 빌딩 프로그램, 국내외 워크숍으로 출근하고 싶은 아이포트폴리오를 만들고자 합니다.",
  },
  snackBar: {
    title: <Translation>{(t) => t("HPG-65")}</Translation>,
    description:
      "입이 심심할 틈을 주지 않습니다. 체중의 증가가 걱정되시는 분들은 내부 비공식적 건강관리 모임 가입을 추천드립니다.",
  },
  motionDesk: {
    title: <Translation>{(t) => t("HPG-66")}</Translation>,
    description:
      "건강한 몸에 건강한 마음이 깃든다고 믿습니다. 모든 아이포트폴리오인이 건강할 수 있도록 모션데스크를 지원하고 있습니다.",
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
  const { language } = useI18next();
  return (
    <ContainerStyled>
      <SubTitle>복리후생</SubTitle>
      <Wrapper>
        {Object.keys(WelfareData).map(function (key: string, index) {
          if (key == "youthBenefits" && language === "en") {
            return;
          }
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
