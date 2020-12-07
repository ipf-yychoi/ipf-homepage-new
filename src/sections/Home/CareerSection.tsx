import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";

import colors from "../../layouts/colors";

import Container from "../../components/Container";
import SubTitleEngWhite from "../../components/SubTitleEngWhite";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Description from "../../components/Description";
import PhotoCarouselHome from "../../components/PhotoCarouselHome";

const ContainerStyled = styled(Container)`
  background-color: ${colors.black};
  padding-bottom: 0;
`;

export default function CareerSection() {
  const { t } = useTranslation();
  return (
    <>
      <ContainerStyled>
        <Column>
          <Label>{t("HPG-95")}</Label>
          <SubTitleEngWhite>{t("HPG-96")}</SubTitleEngWhite>
          <Description
            style={{
              color: "white",
            }}
          >
            {t("HPG-3")}
          </Description>
          <Button onClick={() => navigate("/Career")}>{t("HPG-4")}</Button>
        </Column>
      </ContainerStyled>
      <PhotoCarouselHome />
    </>
  );
}
