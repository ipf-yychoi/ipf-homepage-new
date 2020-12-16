import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive } from "../../layouts/responsive";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Description from "../../components/Description";

import img_growing_together_1 from "../../assets/images/Career/img_growing_together_1.png";
import img_growing_together_2 from "../../assets/images/Career/img_growing_together_2.png";
import img_growing_together_3 from "../../assets/images/Career/img_growing_together_3.png";

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 1040px) {
    flex-direction: row;
  }
`;

const GrowthImage = styled.img`
  width: 100%;
  height: 26.7rem;
  border-radius: 16px;

  @media ${responsive.conditionForDesktop} {
    width: 33.6rem;
    height: 28rem;
  }
`;

const ContainerStyled = styled(Container)`
  flex-direction: column;
`;

export default function GrowthSection() {
  const { t } = useTranslation();

  return (
    <ContainerStyled
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <SubTitle>{t("HPG-53")}</SubTitle>
      <Description>{t("HPG-54")}</Description>
      <ImageList>
        <GrowthImage src={img_growing_together_1} />
        <GrowthImage src={img_growing_together_2} />
        <GrowthImage src={img_growing_together_3} />
      </ImageList>
    </ContainerStyled>
  );
}
