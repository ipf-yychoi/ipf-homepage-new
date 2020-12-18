import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { responsive } from "../../layouts/responsive";

import Container from "../../components/Container";
import SubTitleEng from "../../components/SubTitleEng";
import Label from "../../components/Label";
import Description from "../../components/Description";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media ${responsive.conditionForDesktop} {
    flex-direction: row;
  }
`;

const SubTitleEngStyled = styled(SubTitleEng)`
  @media ${responsive.conditionForDesktop} {
    width: 445px;
  }
`;

const DescriptionStyled = styled(Description)`
  margin-bottom: 0;
  @media ${responsive.conditionForDesktop} {
    width: 480px;
  }
`;

export default function MissionSection() {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    if (window.screen.width >= 1040) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    if (window.screen.width >= 1040) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }

  return (
    <Container
      style={{ flexDirection: "column" }}
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <Label>{t("HPG-100")}</Label>
      <Row>
        <SubTitleEngStyled>
          {isMobile && t("HPG-123-M")}
          {!isMobile && t("HPG-123")}
        </SubTitleEngStyled>
        <DescriptionStyled>{t("HPG-5")}</DescriptionStyled>
      </Row>
    </Container>
  );
}
