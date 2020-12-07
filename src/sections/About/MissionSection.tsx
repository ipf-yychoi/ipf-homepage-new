import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Label from "../../components/Label";
import Description from "../../components/Description";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
  }
`;

const SubTitleStyled = styled(SubTitle)`
  /* width: 50rem; */
`;

const DescriptionStyled = styled(Description)`
  /* width: 50rem; */
`;

export default function MissionSection() {
  const { t } = useTranslation();

  return (
    <Container style={{ flexDirection: "column" }}>
      <Label>{t("HPG-100")}</Label>
      <Row>
        <SubTitleStyled>
          {isMobile && t("HPG-123-M")}
          {!isMobile && t("HPG-123")}
        </SubTitleStyled>
        <DescriptionStyled>{t("HPG-5")}</DescriptionStyled>
      </Row>
    </Container>
  );
}
