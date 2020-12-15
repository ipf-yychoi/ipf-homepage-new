import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive } from "../../layouts/responsive";

import Typography from "../../assets/Typography";
import colors from "../../layouts/colors";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Label from "../../components/Label";
import Column from "../../components/Column";
import PhotoCarouselAbout from "../../containers/PhotoCarouselAbout";

import img_vector from "../../assets/images/About/img_vector.png";

const HistoryTitleContainer = styled(Container)`
  padding-bottom: 0;
`;

const History = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem calc((100% - 32rem) / 2);
  padding-top: 0;

  gap: 4rem;

  width: 100%;

  @media ${responsive.conditionForTablet} {
    display: grid;
    padding: 120px calc((100% - 104rem) / 2);
    padding-top: 0;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column: span 3 / -3;
    grid-auto-rows: min-content;

    row-gap: 8rem;
    column-gap: 1.8rem;
  }
`;

const Timeline = styled(Column)`
  height: fit-content;
  margin: 0;
`;

const Year = styled.div`
  ${Typography("heading1")};
  white-space: nowrap;
`;

const Vector = styled.img`
  padding-left: 0.8rem;
`;

const RedBubble = styled.div`
  width: fit-content;
  padding: 0.8rem 1.6rem;

  border-radius: 0.8rem;
  background-color: rgba(239, 80, 48, 0.1);

  margin-top: 3.2rem;
  margin-bottom: 1.3rem;

  white-space: nowrap;
  ${Typography("body", 1.6, 700)};
  color: ${colors.primary};
`;

const List = styled.div`
  margin-left: 2rem;
  line-height: 1px;
  width: 28.6rem;
`;

const BulletPoint = styled.span`
  line-height: 1.1rem;
  :before {
    position: relative;
    top: 1.8rem;
    right: 2rem;
    content: "•";
    font-size: 10pt;
  }
`;

const BulletItem = styled.p`
  ${Typography("body", 1.6, 400)};
`;

export default function HistorySection() {
  const { t } = useTranslation();

  return (
    <>
      <HistoryTitleContainer
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <Column>
          <Label>{t("HPG-102")}</Label>
          <SubTitle>{t("HPG-8")}</SubTitle>
        </Column>
      </HistoryTitleContainer>
      <PhotoCarouselAbout />
      <History>
        <Timeline>
          <Year>
            {t("HPG-112")}
            <Vector src={img_vector} />
          </Year>
          <RedBubble>{t("HPG-103")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-9")}</BulletItem>
            </BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Year>
            {t("HPG-113")}
            <Vector src={img_vector} />
          </Year>

          <RedBubble>{t("HPG-103")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-10")}</BulletItem>
            </BulletPoint>
          </List>
          <RedBubble>{t("HPG-108")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-12")}</BulletItem>
            </BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Year>
            {t("HPG-114")}
            <Vector src={img_vector} />
          </Year>
          <RedBubble>{t("HPG-106")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-12")}</BulletItem>
            </BulletPoint>
          </List>
          <RedBubble>{t("HPG-110")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-13")}</BulletItem>
            </BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Year>
            {t("HPG-115")}
            <Vector src={img_vector} />
          </Year>
          <RedBubble>{t("HPG-107")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-14")}</BulletItem>
            </BulletPoint>
          </List>
          <RedBubble>{t("HPG-109")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-15")}</BulletItem>
            </BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Year>
            {t("HPG-116")}
            <Vector src={img_vector} />
          </Year>
          <RedBubble>{t("HPG-106")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-16")}</BulletItem>
            </BulletPoint>
            <BulletPoint>
              <BulletItem>{t("HPG-17")}</BulletItem>
            </BulletPoint>
          </List>
          <RedBubble>{t("HPG-107")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-18")}</BulletItem>
            </BulletPoint>
          </List>
          <RedBubble>{t("HPG-108")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-19")}</BulletItem>
            </BulletPoint>
          </List>
          <RedBubble>{t("HPG-111")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-20")}</BulletItem>
            </BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Year>
            {t("HPG-117")}
            <Vector src={img_vector} />
          </Year>
          <RedBubble>{t("HPG-109")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-21")}</BulletItem>
            </BulletPoint>
          </List>
          <RedBubble>{t("HPG-111")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-22")}</BulletItem>
            </BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Year>
            {t("HPG-118")}
            <Vector src={img_vector} />
          </Year>
          <RedBubble>{t("HPG-104")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-23")}</BulletItem>
            </BulletPoint>
          </List>
          <RedBubble>{t("HPG-111")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-24")}</BulletItem>
            </BulletPoint>
          </List>
        </Timeline>
        <Timeline>
          <Year>
            {t("HPG-119")}
            <Vector src={img_vector} />
          </Year>
          <RedBubble>{t("HPG-103")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-25")}</BulletItem>
            </BulletPoint>
            <BulletPoint>
              <BulletItem>{t("HPG-26")}</BulletItem>
            </BulletPoint>
          </List>
          <RedBubble>{t("HPG-105")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-27")}</BulletItem>
            </BulletPoint>
            <BulletPoint>
              <BulletItem>{t("HPG-28")}</BulletItem>
            </BulletPoint>
          </List>
          <RedBubble>{t("HPG-110")}</RedBubble>
          <List>
            <BulletPoint>
              <BulletItem>{t("HPG-29")}</BulletItem>
            </BulletPoint>
          </List>
        </Timeline>
      </History>
    </>
  );
}
