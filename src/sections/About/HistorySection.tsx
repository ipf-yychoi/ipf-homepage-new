import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Typography from "../../assets/Typography";
import colors from "../../layouts/colors";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Label from "../../components/Label";
import Column from "../../components/Column";
import PhotoCarouselAbout from "../../containers/PhotoCarouselAbout";

import img_vector from "../../assets/images/About/img_vector.png";

const History = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px calc((100% - 320px) / 2);

  gap: 40px;

  width: 100%;

  @media only screen and (min-width: 1040px) {
    display: grid;
    padding: 120px calc((100% - 1040px) / 2);
    grid-template-columns: 1fr 1fr 1fr;
    grid-column: span 3 / -3;
    grid-auto-rows: min-content;

    row-gap: 80px;
    column-gap: 18px;
  }
`;

const Timeline = styled(Column)`
  height: fit-content;
  margin: 0;
`;

const Month = styled.div`
  ${Typography("heading1")};
  white-space: nowrap;
`;

const Vector = styled.img`
  padding-left: 8px;
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

export default function HistorySection() {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Column>
          <Label>{t("HPG-102")}</Label>
          <SubTitle>{t("HPG-8")}</SubTitle>
        </Column>
      </Container>
      <PhotoCarouselAbout />
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
    </>
  );
}
