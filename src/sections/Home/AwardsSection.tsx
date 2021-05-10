import React from 'react';
import styled, { css } from 'styled-components';

import { high_resolution, responsive } from '../../layouts/responsive';

import ic_awarded_aes from '../../assets/images/Home/ic_awarded_aes.png';
import ic_awarded_aes_2x from '../../assets/images/Home/ic_awarded_aes@2x.png';
import ic_awarded_bett2020 from '../../assets/images/Home/ic_awarded_bett2020.png';
import ic_awarded_bett2020_2x from '../../assets/images/Home/ic_awarded_bett2020@2x.png';
import ic_awarded_bett2021 from '../../assets/images/Home/ic_awarded_bett2021.png';
import ic_awarded_bett2021_2x from '../../assets/images/Home/ic_awarded_bett2021@2x.png';
import ic_awarded_esu from '../../assets/images/Home/ic_awarded_esu.png';
import ic_awarded_esu_2x from '../../assets/images/Home/ic_awarded_esu@2x.png';
import ic_awarded_edtech from '../../assets/images/Home/ic_awarded_edtech.png';
import ic_awarded_edtech_2x from '../../assets/images/Home/ic_awarded_edtech@2x.png';
import ic_awarded_aws from '../../assets/images/Home/ic_awarded_aws.png';
import ic_awarded_aws_2x from '../../assets/images/Home/ic_awarded_aws@2x.png';

const commonStyle = css`
  width: 15rem;
  height: 9.1rem;

  margin: 1.2rem;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const AwardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6.8rem;
  margin-bottom: 10.8rem;
  flex-wrap: wrap;

  @media ${responsive.conditionForTablet} {
    flex-wrap: nowrap;
  }
`;

const AES = styled.a`
  ${commonStyle};
  background-image: url(${ic_awarded_aes});
  @media ${high_resolution} {
    background-image: url(${ic_awarded_aes_2x});
  }
`;

const BETT2020 = styled.a`
  ${commonStyle};

  background-image: url(${ic_awarded_bett2020});
  @media ${high_resolution} {
    background-image: url(${ic_awarded_bett2020_2x});
  }
`;

const BETT2021 = styled.a`
  ${commonStyle};

  background-image: url(${ic_awarded_bett2021});
  @media ${high_resolution} {
    background-image: url(${ic_awarded_bett2021_2x});
  }
`;

const ESU = styled.a`
  ${commonStyle};

  background-image: url(${ic_awarded_esu});
  @media ${high_resolution} {
    background-image: url(${ic_awarded_esu_2x});
  }
`;

const EdTech = styled.a`
  ${commonStyle};

  background-image: url(${ic_awarded_edtech});
  @media ${high_resolution} {
    background-image: url(${ic_awarded_edtech_2x});
  }
`;

const AWS = styled.a`
  ${commonStyle};

  background-image: url(${ic_awarded_aws});
  @media ${high_resolution} {
    background-image: url(${ic_awarded_aws_2x});
  }
`;

const awardKeys = ['AES', 'BETT2020', 'BETT2021', 'ESU', 'EdTech', 'AWS'];
const awardLinks = {
  AES: 'https://www.elearningawards.jp/award-winner#platinum-1',
  BETT2020: 'https://bettawards.com/shortlist2020/',
  BETT2021: 'https://bettawards.com/2021-shortlist/',
  ESU: 'https://www.esu.org/',
  EdTech:
    'https://edtech-startups-apac.educationtechnologyinsights.com/vendor/iportfolio-inc-transforming-the-way-people-learn-and-teach-english-cid-321-mid-50.html',
  AWS: 'https://aws.amazon.com/ko/education/edstart/',
};

export default function AwardsSection() {
  return (
    <AwardImageContainer>
      <AES
        href="https://www.elearningawards.jp/award-winner#platinum-1"
        target="_blank"
      />
      <BETT2020 href="https://bettawards.com/shortlist2020/" target="_blank" />
      <BETT2021 href="https://bettawards.com/2021-shortlist/" target="_blank" />
      <ESU href="https://www.esu.org/" target="_blank" />
      <EdTech
        href="https://edtech-startups-apac.educationtechnologyinsights.com/vendor/iportfolio-inc-transforming-the-way-people-learn-and-teach-english-cid-321-mid-50.html"
        target="_blank"
      />
      <AWS
        href="https://aws.amazon.com/ko/education/edstart/"
        target="_blank"
      />
    </AwardImageContainer>
  );
}
