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
  height: 225px;
  border-radius: 16px;

  background-image: url(${img_bett_highlights});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media only screen and (max-width: 1040px) {
    height: 100%;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const ColumnStyled = styled(Column)`
  padding: 49px 56px 0 56px;
  width: 100%;
  @media only screen and (max-width: 1040px) {
    padding: 32px;
  }
`;

const DescriptionStyled = styled(Description)`
  color: white;
  width: 592px;

  @media only screen and (max-width: 1040px) {
    width: 100%;
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
