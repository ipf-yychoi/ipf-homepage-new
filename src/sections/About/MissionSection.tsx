import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import { responsive } from '../../layouts/responsive';

import Container from '../../components/Container';
import SubTitleEng from '../../components/SubTitleEng';
import Label from '../../components/Label';
import Description from '../../components/Description';

const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media ${responsive.conditionForTablet} {
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

  const breakpoints = useBreakpoint();

  return (
    <Container
      style={{ flexDirection: 'column' }}
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <Label>{t('TEXT-13')}</Label>
      <ColumnStyled>
        <SubTitleEngStyled>
          {breakpoints.mobile && t('TEXT-36-M')}
          {!breakpoints.mobile && t('TEXT-36')}
        </SubTitleEngStyled>
        <DescriptionStyled>{t('HPG-5')}</DescriptionStyled>
      </ColumnStyled>
    </Container>
  );
}
