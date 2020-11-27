import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import colors from "../layouts/colors";
import Typography from "../Typography";

import Header from "../components/Header";

import Interview from "../components/Career/Interview";
import Benefit from "../components/Career/Benefit";
import EmploymentStep from "../components/Career/EmploymentStep";
import Jobs from "../components/Career/Jobs";
import Footer from "../components/Footer";

import img_we_1 from "../images/Career/img_we_1.png";
import img_we_2 from "../images/Career/img_we_2.png";
import img_we_3 from "../images/Career/img_we_3.png";
import img_good_team from "../images/Career/img_good_team.png";
import img_growing_together_1 from "../images/Career/img_growing_together_1.png";
import img_growing_together_2 from "../images/Career/img_growing_together_2.png";
import img_growing_together_3 from "../images/Career/img_growing_together_3.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 1040px) / 2);

  margin: 120px 0;

  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const Title = styled.h2`
  ${Typography("heading1")};
  line-height: 49px;
  color: ${colors.black};
`;

const Description = styled.div`
  ${Typography("body", 1.4)};
  white-space: nowrap;
  margin: 24px 0;
`;

const ImageItem = styled.div`
  width: 336px;
  height: 280px;
  border-radius: 16px;
`;

const ImageList = styled.div`
  display: flex;
  gap: 16px;
`;

const ValueText = styled.div`
  width: 100%;
  padding: 40px;

  ${Typography("body", 1.6, 700)};
  color: white;

  word-break: keep-all;
`;

const GoodTeam = styled.div`
  width: 100%;
  height: 543px;
  background-image: url(${img_good_team});
  background-position: center;
  background-repeat: no-repeat;
`;

const GrowthImage = styled.img`
  width: 336px;
  height: 280px;
  border-radius: 16px;
`;

export default function Career() {
  const { t } = useTranslation();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header>Career</Header>
      <Container>
        <Title>{t("HPG-38")}</Title>
        <Description>{t("HPG-39")}</Description>
        <ImageList>
          <ImageItem
            style={{
              backgroundImage: `url(${img_we_1})`,
            }}
          >
            <ValueText>{t("HPG-40")}</ValueText>
          </ImageItem>
          <ImageItem
            style={{
              backgroundImage: `url(${img_we_2})`,
            }}
          >
            <ValueText>{t("HPG-41")}</ValueText>
          </ImageItem>
          <ImageItem
            style={{
              backgroundImage: `url(${img_we_3})`,
            }}
          >
            <ValueText>{t("HPG-42")}</ValueText>
          </ImageItem>
        </ImageList>
      </Container>
      <GoodTeam>
        <Container
          style={{ margin: 0, height: "100%", justifyContent: "flex-start" }}
        >
          <Column>
            <Title style={{ color: "white" }}>{t("HPG-43")}</Title>
            <Description style={{ marginTop: "24px", color: "white" }}>
              {t("HPG-44")}
            </Description>
          </Column>
        </Container>
      </GoodTeam>
      <Interview />
      <Container>
        <Title>{t("HPG-55")}</Title>
        <Description style={{ color: colors.black }}>{t("HPG-56")}</Description>
        <ImageList>
          <GrowthImage src={img_growing_together_1} />
          <GrowthImage src={img_growing_together_2} />
          <GrowthImage src={img_growing_together_3} />
        </ImageList>
      </Container>
      <Benefit />
      <EmploymentStep />
      <Jobs />
      <Footer />
    </div>
  );
}
