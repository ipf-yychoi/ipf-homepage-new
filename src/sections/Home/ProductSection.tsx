import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { navigate } from "gatsby";

import Container from "../../components/Container";
import SubTitleEng from "../../components/SubTitleEng";
import Label from "../../components/Label";
import Button from "../../components/Button";
import Column from "../../components/Column";
import Description from "../../components/Description";

import img_home_product_image from "../../assets/images/Home/img_home_product_image.png";

const HomeProductImg = styled.img`
  width: 100%;
  height: 275px;
  margin-top: 64px;

  @media only screen and (min-width: 768px) {
    width: 596px;
    height: 512px;
    margin-top: 0;
  }
`;

const ColumnStyled = styled(Column)`
  @media only screen and (min-width: 1040px) {
    width: 385px;
  }
`;

export default function ProductSection() {
  const { t } = useTranslation();
  return (
    <Container>
      <ColumnStyled>
        <Label>{t("HPG-91")}</Label>
        <SubTitleEng>{t("HPG-92")}</SubTitleEng>
        <Description>{t("HPG-2")}</Description>
        <Button onClick={() => navigate("/Product")}>{t("HPG-4")}</Button>
      </ColumnStyled>
      <HomeProductImg
        src={img_home_product_image}
        alt="Reading& products and awards"
      />
    </Container>
  );
}
