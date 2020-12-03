import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Description from "../../components/Description";

import img_home_product_image from "../../assets/images/Home/img_home_product_image.png";

const HomeProductImg = styled.img`
  width: 596px;
  height: 512px;

  @media only screen and (max-width: 1040px) {
    width: 100%;
    height: 275px;
    margin-top: 64px;
  }
`;

export default function ProductSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <Column>
        <Label>{t("HPG-91")}</Label>
        <SubTitle>{t("HPG-92")}</SubTitle>
        <Description>{t("HPG-2")}</Description>
        <Button onClick={() => navigate("/Product")}>{t("HPG-4")}</Button>
      </Column>
      <HomeProductImg
        src={img_home_product_image}
        alt="Reading& products and awards"
      />
    </Container>
  );
}
