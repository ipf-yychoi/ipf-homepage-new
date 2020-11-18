import React from "react";
import styled from "styled-components";

import colors from "../layouts/colors";
import Typography from "../Typography";

import Header from "../components/Header";

import Interview from "../components/Career/Interview";
import Benefit from "../components/Career/Benefit";
import EmploymentStep from "../components/Career/EmploymentStep";
import Jobs from "../components/Career/Jobs";
import Footer from "../components/Footer";

import img_we_1 from "../images/Career/img_we_1.png";
import img_we_2 from "../images/Career/img_we_2.png";
import img_we_3 from "../images/Career/img_we_3.png";
import img_good_team from "../images/Career/img_good_team.png";
import img_growing_together_1 from "../images/Career/img_growing_together_1.png";
import img_growing_together_2 from "../images/Career/img_growing_together_2.png";
import img_growing_together_3 from "../images/Career/img_growing_together_3.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 1040px) / 2);

  margin: 120px 0;

  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const Title = styled.h2`
  ${Typography("heading1")};
  line-height: 49px;
  color: ${colors.black};
`;

const Description = styled.div`
  ${Typography("body", 0.875)};
  white-space: nowrap;
  margin: 24px 0;
`;

const ImageItem = styled.div`
  width: 336px;
  height: 280px;
  border-radius: 16px;
`;

const ImageList = styled.div`
  display: flex;
  gap: 16px;
`;

const ValueText = styled.div`
  width: 100%;
  padding: 40px;

  ${Typography("body", 1, 700)};
  color: white;

  word-break: keep-all;
`;

const GoodTeam = styled.div`
  width: 100%;
  height: 543px;
  background-image: url(${img_good_team});
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 2000px 0 0 0 rgba(0, 0, 0, 0.5);
`;

const GrowthImage = styled.img`
  width: 336px;
  height: 280px;
  border-radius: 16px;
`;

export default function Career() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header>Career</Header>
      <Container>
        <Title>
          우리와 함께 할 <br />
          당신을 기다립니다
        </Title>
        <Description>
          '철학있는 기술'로 영어 교육을 함께 개선해나갈 다양한 분야의 실력자들을
          기다립니다.
        </Description>
        <ImageList>
          <ImageItem
            style={{
              backgroundImage: `url(${img_we_1})`,
              boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)",
            }}
          >
            <ValueText>
              우리는 자율 기반의 리더십과 전문성을 바탕으로 최고의 성과를
              추구합니다.
            </ValueText>
          </ImageItem>
          <ImageItem
            style={{
              backgroundImage: `url(${img_we_2})`,
              boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)",
            }}
          >
            <ValueText>
              우리는 고객과 공감하여 실질적 시장 가치를 창출하고 동료와 협업하여
              함께 성장합니다.
            </ValueText>
          </ImageItem>
          <ImageItem
            style={{
              backgroundImage: `url(${img_we_3})`,
              boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)",
            }}
          >
            <ValueText>
              우리는 올바르고 정의로운 동기를 바탕으로 사회에 도움이 되는 사업을
              추구합니다.
            </ValueText>
          </ImageItem>
        </ImageList>
      </Container>
      <GoodTeam>
        <Container
          style={{ margin: 0, height: "100%", justifyContent: "flex-start" }}
        >
          <Column>
            <Title style={{ color: "white" }}>
              좋은 동료는 <br />
              최고의 복지입니다
            </Title>
            <Description style={{ marginTop: "24px", color: "white" }}>
              젊고 열정 있는 동료들로부터 주도적이고 책임감 있게 일하는 모습을
              배웁니다.
            </Description>
          </Column>
        </Container>
      </GoodTeam>
      <Interview />
      <Container>
        <Title>동반성장을 추구합니다</Title>
        <Description style={{ color: colors.black }}>
          회사를 위해 일하기에 앞서 자기 자신의 성장을 위해 최선을 다하기를
          기대합니다. <br />
          회사의 성장은 그러한 인재들이 모인 자연스러운 결과물일 것입니다.
        </Description>
        <ImageList>
          <GrowthImage src={img_growing_together_1} />
          <GrowthImage src={img_growing_together_2} />
          <GrowthImage src={img_growing_together_3} />
        </ImageList>
      </Container>
      <Benefit />
      <EmploymentStep />
      <Jobs />
      <Footer />
    </div>
  );
}
