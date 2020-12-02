import React, { useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import colors from "../layouts/colors";
import Typography from "../Typography";

import Header from "../components/Header";
import AboutPhotoCarousel from "../components/About/AboutPhotoCarousel";
import Footer from "../components/Footer";

import img_diagram from "../images/About/img_diagram.png";
import img_vector from "../images/About/img_vector.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px calc((100% - 1040px) / 2);

  width: 100%;

  ${Typography("heading1")};

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
    padding: 64px calc((100% - 320px) / 2);
  }
`;

const History = styled.div`
  display: grid;
  padding: 120px calc((100% - 1040px) / 2);

  grid-template-columns: 1fr 1fr 1fr;
  grid-column: span 3 / -3;
  grid-auto-rows: min-content;

  row-gap: 80px;
  column-gap: 18px;

  @media only screen and (max-width: 1040px) {
    display: flex;
    flex-direction: column;
  }
`;

const Label = styled.h3`
  ${Typography("heading2")};
  color: ${colors.primary};
  margin: 0 0 8px 0;
  width: 100%;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const SubTitle = styled.p`
  ${Typography("heading1")};
  line-height: 49px;

  word-break: keep-all;
`;

const Description = styled.p`
  ${Typography("body", 1.4)};
  color: ${colors.black};
  margin: auto 0;
  width: 70%;
  word-break: keep-all;
`;

const Month = styled.div`
  ${Typography("heading1")};
  white-space: nowrap;
`;

const Vector = styled.img`
  margin-left: 8px;
`;

const RedBubble = styled.div`
  width: fit-content;
  padding: 8px 16px;
  margin: 24px 0;

  border-radius: 8px;
  background-color: rgba(239, 80, 48, 0.1);

  margin: 32px 32px 32px 0;

  white-space: nowrap;
  ${Typography("heading2")};
  color: ${colors.primary};
`;

const List = styled.ul`
  width: 286px;
`;

const BulletPoint = styled.li`
  ${Typography("body", 1.6, 400)};
  list-style: disc;
  margin-left: 20px;
  margin-bottom: 8px;
`;

const CoreValuesImg = styled.img`
  width: 50%;

  @media only screen and (max-width: 1040px) {
    width: 100%;
  }
`;

export default function About() {
  const { t } = useTranslation();

  // let isMobile = false;
  // if (window.screen.width <= 480) isMobile = true;

  // if (isMobile) SubTitleString = SubTitleString.replace("and", "&");

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header>{t("HPG-89")}</Header>
      <Container style={{ marginBottom: "8px", paddingBottom: 0 }}>
        <Label>{t("HPG-100")}</Label>
      </Container>
      <Container style={{ gap: "16px", paddingTop: 0 }}>
        <Row>
          <SubTitle>{t("HPG-123")}</SubTitle>
          <Description>{t("HPG-5")}</Description>
        </Row>
      </Container>
      <Container style={{ backgroundColor: colors.gray1 }}>
        <Column>
          <Label>{t("HPG-101")}</Label>
          <SubTitle>{t("HPG-6")}</SubTitle>
          <Description style={{ marginTop: "24px", width: "249px" }}>
            {t("HPG-7")}
          </Description>
        </Column>
        <CoreValuesImg src={img_diagram} />
      </Container>
      <Container>
        <Column>
          <Label>{t("HPG-102")}</Label>
          <SubTitle>{t("HPG-8")}</SubTitle>
        </Column>
      </Container>
      <AboutPhotoCarousel />
      <History>
        <Timeline>
          <Month>
            {t("HPG-112")}
            <Vector src={img_vector} />
          </Month>
          <RedBubble>{t("HPG-103")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-9")}</BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Month>
            {t("HPG-113")}
            <Vector src={img_vector} />
          </Month>
          <RedBubble>{t("HPG-103")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-10")}</BulletPoint>
          </List>
          <RedBubble>{t("HPG-108")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-12")}</BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Month>
            {t("HPG-114")}
            <Vector src={img_vector} />
          </Month>
          <RedBubble>{t("HPG-106")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-12")}</BulletPoint>
          </List>
          <RedBubble>{t("HPG-110")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-13")}</BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Month>
            {t("HPG-115")}
            <Vector src={img_vector} />
          </Month>
          <RedBubble>{t("HPG-107")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-14")}</BulletPoint>
          </List>
          <RedBubble>{t("HPG-109")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-15")}</BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Month>
            {t("HPG-116")}
            <Vector src={img_vector} />
          </Month>
          <RedBubble>{t("HPG-106")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-16")}</BulletPoint>
            <BulletPoint>{t("HPG-17")}</BulletPoint>
          </List>
          <RedBubble>{t("HPG-107")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-18")}</BulletPoint>
          </List>
          <RedBubble>{t("HPG-108")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-19")}</BulletPoint>
          </List>
          <RedBubble>{t("HPG-111")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-20")}</BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Month>
            {t("HPG-117")}
            <Vector src={img_vector} />
          </Month>
          <RedBubble>{t("HPG-109")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-21")}</BulletPoint>
          </List>
          <RedBubble>{t("HPG-111")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-22")}</BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Month>
            {t("HPG-118")}
            <Vector src={img_vector} />
          </Month>
          <RedBubble>{t("HPG-104")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-23")}</BulletPoint>
          </List>
          <RedBubble>{t("HPG-111")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-24")}</BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Month>
            {t("HPG-119")}
            <Vector src={img_vector} />
          </Month>
          <RedBubble>{t("HPG-103")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-25")}</BulletPoint>
            <BulletPoint>{t("HPG-26")}</BulletPoint>
          </List>
          <RedBubble>{t("HPG-105")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-27")}</BulletPoint>
            <BulletPoint>{t("HPG-28")}</BulletPoint>
          </List>
          <RedBubble>{t("HPG-110")}</RedBubble>
          <List>
            <BulletPoint>{t("HPG-29")}</BulletPoint>
          </List>
        </Timeline>
      </History>
      <Footer />
    </div>
  );
}
