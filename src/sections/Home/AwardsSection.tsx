import React from "react";
import styled, { css } from "styled-components";

import { high_resolution } from "../../layouts/responsive";

import ic_awarded_aes from "../../assets/images/Home/ic_awarded_aes.png";
import ic_awarded_aes_2x from "../../assets/images/Home/ic_awarded_aes@2x.png";
import ic_awarded_bett from "../../assets/images/Home/ic_awarded_bett.png";
import ic_awarded_bett_2x from "../../assets/images/Home/ic_awarded_bett@2x.png";
import ic_awarded_esu from "../../assets/images/Home/ic_awarded_esu.png";
import ic_awarded_esu_2x from "../../assets/images/Home/ic_awarded_esu@2x.png";
import ic_awarded_edtech from "../../assets/images/Home/ic_awarded_edtech.png";
import ic_awarded_edtech_2x from "../../assets/images/Home/ic_awarded_edtech@2x.png";
import ic_awarded_aws from "../../assets/images/Home/ic_awarded_aws.png";
import ic_awarded_aws_2x from "../../assets/images/Home/ic_awarded_aws@2x.png";

const commonStyle = css`
  width: 15rem;
  height: 9.1rem;

  margin: 1.2rem;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const AwardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6.8rem;
  margin-bottom: 10.8rem;
  flex-wrap: wrap;
`;

const AES = styled.span`
  ${commonStyle};
  background-image: url(${ic_awarded_aes});
  @media ${high_resolution} {
    background-image: url(${ic_awarded_aes_2x});
  }
`;

const BETT = styled.span`
  ${commonStyle};

  background-image: url(${ic_awarded_bett});
  @media ${high_resolution} {
    background-image: url(${ic_awarded_bett_2x});
  }
`;

const ESU = styled.span`
  ${commonStyle};

  background-image: url(${ic_awarded_esu});
  @media ${high_resolution} {
    background-image: url(${ic_awarded_esu_2x});
  }
`;

const EdTech = styled.span`
  ${commonStyle};

  background-image: url(${ic_awarded_edtech});
  @media ${high_resolution} {
    background-image: url(${ic_awarded_edtech_2x});
  }
`;

const AWS = styled.span`
  ${commonStyle};

  background-image: url(${ic_awarded_aws});
  @media ${high_resolution} {
    background-image: url(${ic_awarded_aws_2x});
  }
`;

export default function AwardsSection() {
  return (
    <AwardImageContainer>
      <AES />
      <BETT />
      <ESU />
      <EdTech />
      <AWS />
    </AwardImageContainer>
  );
}
