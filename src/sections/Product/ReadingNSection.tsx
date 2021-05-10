import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { responsive, high_resolution } from '../../layouts/responsive';

import Container from '../../components/Container';
import Column from '../../components/Column';
import Description from '../../components/Description';
import Services from '../../components/Services';
import { ProductImg } from '../../components/ProductImg';

import img_product_readingn from '../../assets/images/Product/img_product_readingn.png';
import img_product_readingn_2x from '../../assets/images/Product/img_product_readingn@2x.png';
import img_logo_readingn from '../../assets/images/Product/img_logo_readingn.png';
import img_logo_readingn_2x from '../../assets/images/Product/img_logo_readingn@2x.png';

const ContainerStyled = styled(Container)`
  flex-direction: column-reverse;
  padding-bottom: 1rem;
  @media ${responsive.conditionForTablet} {
    flex-direction: row;
  }
`;

const ColumnStyled = styled(Column)`
  @media ${responsive.conditionForTablet} {
    width: 30rem;
  }

  @media ${responsive.conditionForDesktop} {
    width: fit-content;
  }
`;

const DescriptionStyled = styled(Description)`
  width: 100%;
  margin: 0;

  @media ${responsive.conditionForDesktop} {
    width: 38.1rem;
  }
`;

const Logo = styled.span`
  margin-bottom: 2.4rem;

  width: 24.2rem;
  height: 4rem;

  background-image: url(${img_logo_readingn});
  @media ${high_resolution} {
    background-image: url(${img_logo_readingn_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;
`;

const ProductImgStyled = styled(ProductImg)`
  width: 100%;
  height: 19rem;
  background-image: url(${img_product_readingn});
  @media ${high_resolution} {
    background-image: url(${img_product_readingn_2x});
  }

  background-repeat: no-repeat;
  background-size: cover;

  @media ${responsive.conditionForTablet} {
    width: 40.1rem;
    height: 30.3rem;
    background-size: contain;
  }

  @media ${responsive.conditionForDesktop} {
    width: 51.1rem;
  }
`;

const ReadingNServiceList = [
  { key: 'Web', link: 'https://www.readingn.com/' },
  {
    key: 'Apple',
    link: 'https://apps.apple.com/app/reading/id1128287708',
  },
  {
    key: 'Android',
    link: 'https://play.google.com/store/apps/details?id=com.spindle.tapas',
  },
  {
    key: 'YouTube',
    link: 'https://www.youtube.com/channel/UC_zfMeN2L_F1Ss23fPrqTyA',
  },
];

export default function ReadingNSection() {
  const { t } = useTranslation();
  return (
    <ContainerStyled
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <ProductImgStyled />
      <ColumnStyled>
        <Logo />
        <DescriptionStyled>{t('HPG-32')}</DescriptionStyled>
        <Services serviceList={ReadingNServiceList} />
      </ColumnStyled>
    </ContainerStyled>
  );
}
