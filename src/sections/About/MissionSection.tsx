import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { isMobile } from "react-device-detect";

import { responsive } from "../../layouts/responsive";

import Container from "../../components/Container";
import SubTitleEng from "../../components/SubTitleEng";
import Label from "../../components/Label";
import Description from "../../components/Description";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media ${responsive.conditionForDesktop} {
    flex-direction: row;
  }
`;

const SubTitleEngStyled = styled(SubTitleEng)`
  @media ${responsive.conditionForDesktop} {
    width: 445px;
  }
`;

const DescriptionStyled = styled(Description)`
  margin-bottom: 0;
  @media ${responsive.conditionForDesktop} {
    width: 480px;
  }
`;

export default function MissionSection() {
  const { t } = useTranslation();

  return (
    <Container style={{ flexDirection: "column" }}>
      <Label>{t("HPG-100")}</Label>
      <Row>
        <SubTitleEngStyled>
          {isMobile && t("HPG-123-M")}
          {!isMobile && t("HPG-123")}
        </SubTitleEngStyled>
        <DescriptionStyled>{t("HPG-5")}</DescriptionStyled>
      </Row>
    </Container>
  );
}
