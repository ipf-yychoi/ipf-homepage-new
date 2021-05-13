import React from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { responsive, high_resolution } from '../../layouts/responsive';

import Container from '../../components/Container';
import SubTitle from '../../components/SubTitle';
import Description from '../../components/Description';

import img_growing_together_1 from '../../assets/images/Career/img_growing_together_1.png';
import img_growing_together_1_2x from '../../assets/images/Career/img_growing_together_1@2x.png';
import img_growing_together_2 from '../../assets/images/Career/img_growing_together_2.png';
import img_growing_together_2_2x from '../../assets/images/Career/img_growing_together_2@2x.png';
import img_growing_together_3 from '../../assets/images/Career/img_growing_together_3.png';
import img_growing_together_3_2x from '../../assets/images/Career/img_growing_together_3@2x.png';

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${responsive.conditionForTablet} {
    flex-direction: row;
  }
`;

const commonGrowthImageStyle = css`
  width: 100%;
  height: 26.7rem;
  border-radius: 16px;
  margin: 0 0 1.6rem 0;

  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.conditionForTablet} {
    width: 22.6rem;
    height: 28rem;
    margin: 0 1.6rem 0 0;
  }

  @media ${responsive.conditionForDesktop} {
    width: 33.6rem;
  }
`;

const GrowthImage1 = styled.span`
  ${commonGrowthImageStyle};

  background-image: url(${img_growing_together_1});
  @media ${high_resolution} {
    background-image: url(${img_growing_together_1_2x});
  }
`;

const GrowthImage2 = styled.span`
  ${commonGrowthImageStyle};

  background-image: url(${img_growing_together_2});
  @media ${high_resolution} {
    background-image: url(${img_growing_together_2_2x});
  }
`;

const GrowthImage3 = styled.span`
  ${commonGrowthImageStyle};
  background-image: url(${img_growing_together_3});
  @media ${high_resolution} {
    background-image: url(${img_growing_together_3_2x});
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
      <SubTitle>{t('HPG-53')}</SubTitle>
      <Description>{t('HPG-54')}</Description>
      <ImageList>
        <GrowthImage1 />
        <GrowthImage2 />
        <GrowthImage3 />
      </ImageList>
    </ContainerStyled>
  );
}
