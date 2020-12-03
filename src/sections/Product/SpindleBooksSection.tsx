import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../../components/Container";
import Column from "../../components/Column";
import Description from "../../components/Description";

import img_spindlebooks_logo from "../../assets/images/Product/img_spindlebooks_logo.png";
import img_spindlebooks_ipad from "../../assets/images/Product/img_spindlebooks_ipad.png";

const DescriptionStyled = styled(Description)`
  width: 381px;
  margin: 0;
`;

const Logo = styled.img`
  margin-bottom: 24px;

  width: 24rem;
  height: 6rem;
`;

export default function SpindleBooksSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <Column>
        <Logo src={img_spindlebooks_logo} />
        <DescriptionStyled>{t("HPG-30")}</DescriptionStyled>
      </Column>
      <img src={img_spindlebooks_ipad} />
    </Container>
  );
}
