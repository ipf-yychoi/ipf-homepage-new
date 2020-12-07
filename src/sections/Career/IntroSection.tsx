import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Typography from "../../assets/Typography";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Description from "../../components/Description";

import img_we_1 from "../../assets/images/Career/img_we_1.png";
import img_we_2 from "../../assets/images/Career/img_we_2.png";
import img_we_3 from "../../assets/images/Career/img_we_3.png";

const ContainerStyled = styled(Container)`
  flex-direction: column;
`;

const ImageItem = styled.div`
  width: 336px;
  height: 280px;
  border-radius: 16px;
`;

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 1040px) {
    flex-direction: row;
  }
`;

const ValueText = styled.div`
  width: 100%;
  padding: 40px;

  ${Typography("body", 1.6, 700)};
  color: white;

  word-break: keep-all;
`;

export default function IntroSection() {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <SubTitle>{t("HPG-36")}</SubTitle>
      <Description>{t("HPG-37")}</Description>
      <ImageList>
        <ImageItem
          style={{
            backgroundImage: `url(${img_we_1})`,
          }}
        >
          <ValueText>{t("HPG-38")}</ValueText>
        </ImageItem>
        <ImageItem
          style={{
            backgroundImage: `url(${img_we_2})`,
          }}
        >
          <ValueText>{t("HPG-39")}</ValueText>
        </ImageItem>
        <ImageItem
          style={{
            backgroundImage: `url(${img_we_3})`,
          }}
        >
          <ValueText>{t("HPG-40")}</ValueText>
        </ImageItem>
      </ImageList>
    </ContainerStyled>
  );
}
