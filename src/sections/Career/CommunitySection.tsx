import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Container from "../../components/Container";
import SubTitle from "../../components/SubTitle";
import Description from "../../components/Description";
import Column from "../../components/Column";
import Interview from "../../components/Interview";

import img_good_team from "../../assets/images/Career/img_good_team.png";

const GoodTeam = styled.div`
  width: 100%;
  height: 543px;
  background-image: url(${img_good_team});
  background-position: center;
  background-repeat: no-repeat;
`;

const ContainerStyled = styled(Container)`
  margin: 0;
  height: 100%;
`;

const WhiteSubTitle = styled(SubTitle)`
  color: white;
`;

const DescriptionStyled = styled(Description)`
  color: white;
`;

export default function CommunitySection() {
  const { t } = useTranslation();

  return (
    <>
      <GoodTeam>
        <ContainerStyled>
          <Column>
            <WhiteSubTitle>{t("HPG-41")}</WhiteSubTitle>
            <DescriptionStyled>{t("HPG-42")}</DescriptionStyled>
          </Column>
        </ContainerStyled>
      </GoodTeam>
      <Interview />
    </>
  );
}
