import React from "react";
import styled from "styled-components";

import ic_awarded_aes from "../../assets/images/Home/ic_awarded_aes.png";
import ic_awarded_aws from "../../assets/images/Home/ic_awarded_aws.png";
import ic_awarded_bett from "../../assets/images/Home/ic_awarded_bett.png";
import ic_awarded_edtech from "../../assets/images/Home/ic_awarded_edtech.png";
import ic_awarded_esu from "../../assets/images/Home/ic_awarded_esu.png";

const AwardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 120px;
  gap: 24px;
  flex-wrap: wrap;
`;

export default function AwardsSection() {
  return (
    <AwardImageContainer>
      <img src={ic_awarded_aes} />
      <img src={ic_awarded_bett} />
      <img src={ic_awarded_esu} />
      <img src={ic_awarded_edtech} />
      <img src={ic_awarded_aws} />
    </AwardImageContainer>
  );
}
