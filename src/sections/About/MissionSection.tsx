import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

import Container from "../../components/Container";
import SubTitleEng from "../../components/SubTitleEng";
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

const DescriptionStyled = styled(Description)`
  /* width: 50rem; */
`;

export default function MissionSection() {
  const { t } = useTranslation();

  return (
    <Container style={{ flexDirection: "column" }}>
      <Label>{t("HPG-100")}</Label>
      <Row>
        <SubTitleEng>
          {isMobile && t("HPG-123-M")}
          {!isMobile && t("HPG-123")}
        </SubTitleEng>
        <DescriptionStyled>{t("HPG-5")}</DescriptionStyled>
      </Row>
    </Container>
  );
}
