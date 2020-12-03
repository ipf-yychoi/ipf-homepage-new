import React from "react";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";

import colors from "../../layouts/colors";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Description from "../../components/Description";
import HomePhotoCarousel from "../../components/HomePhotoCarousel";

export default function CareerSection() {
  const { t } = useTranslation();
  return (
    <>
      <Container style={{ backgroundColor: colors.black, paddingBottom: 0 }}>
        <Column>
          <Label>{t("HPG-95")}</Label>
          <SubTitle style={{ color: "white" }}>{t("HPG-96")}</SubTitle>

          <Description
            style={{
              color: "white",
            }}
          >
            {t("HPG-3")}
          </Description>
          <Button onClick={() => navigate("/Career")}>{t("HPG-4")}</Button>
        </Column>
      </Container>
      <HomePhotoCarousel />
    </>
  );
}
