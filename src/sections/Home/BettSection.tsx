import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import Container from "../../components/Container";
import SubTitleEngWhite from "../../components/SubTitleEngWhite";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Description from "../../components/Description";

import img_bett_highlights from "../../assets/images/Home/img_bett_highlights.png";

const ContainerStyled = styled(Container)`
  padding-top: 80px;
  padding-bottom: 0;
`;

const Bett2020 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 16px;

  background-image: url(${img_bett_highlights});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media only screen and (min-width: 1040px) {
    height: 225px;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  @media only screen and (min-width: 1040px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ColumnStyled = styled(Column)`
  padding: 32px;
  width: 100%;

  @media only screen and (min-width: 1040px) {
    padding: 49px 56px 0 56px;
  }
`;

const DescriptionStyled = styled(Description)`
  width: 100%;
  color: white;

  @media only screen and (min-width: 1040px) {
    width: 592px;
  }
`;

const ButtonStyled = styled(Button)`
  bottom: 15px;
`;

export default function BettSection() {
  const { t, i18n } = useTranslation();

  return i18n.language === "ko" ? (
    <ContainerStyled>
      <Bett2020>
        <ColumnStyled>
          <SubTitleEngWhite>{t("HPG-97")}</SubTitleEngWhite>
          <DescriptionWrapper>
            <DescriptionStyled>{t("HPG-98")}</DescriptionStyled>
            <ButtonStyled icon="download">{t("HPG-99")}</ButtonStyled>
          </DescriptionWrapper>
        </ColumnStyled>
      </Bett2020>
    </ContainerStyled>
  ) : (
    <> </>
  );
}
