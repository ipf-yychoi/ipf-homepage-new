import React from "react";
import styled from "styled-components";

import colors from "../layouts/colors";

import HeaderContainer from "../components/HeaderContainer";
import Container from "../components/Container";
import Text from "../components/Text";
import ImageOverlay from "../components/ImageOverlay";
import Benefit from "../components/Career/Benefit";

import working1 from "../images/working1.png";
import working2 from "../images/working2.png";
import working3 from "../images/working3.png";
import groupPhoto2 from "../images/groupPhoto2.png";
import growth1 from "../images/Career/growth1.png";
import growth2 from "../images/Career/growth2.png";
import growth3 from "../images/Career/growth3.png";
import arrowLeft from "../images/Career/arrowLeft.png";
import arrowRight from "../images/Career/arrowRight.png";
import klee from "../images/Career/klee.png";

const Image = styled.div`
  width: 336px;
  height: 280px;
  border-radius: 16px;
`;

export default function Career() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <HeaderContainer title="Career" marginRight="920px" />
      <Container style={{ margin: "120px 0" }}>
        <div
          style={{
            flexDirection: "column",
          }}
        >
          <div style={{ marginRight: "700px" }}>
            <Text theme="subtitle" style={{ marginRight: "0px" }}>
              우리와 함께 할 <br />
              당신을 기다립니다
            </Text>
            <Text
              theme="description"
              style={{
                width: "381px",
                height: "84px",
                whiteSpace: "nowrap",
              }}
            >
              '철학있는 기술'로 영어 교육을 함께 개선해나갈 다양한 분야의
              실력자들을 기다립니다.
            </Text>
          </div>
          <div style={{ display: "flex", gap: "40px" }}>
            <Image>
              <ImageOverlay
                source={working1}
                style={{ borderRadius: "16px" }}
              />
              <Text
                type="body1"
                weight="bold"
                color="white"
                style={{
                  position: "relative",
                  width: "256px",
                  height: "48px",
                  bottom: "250px",
                  left: "40px",
                }}
              >
                우리는 자율 기반의 리더십과 전문성을 바탕으로 최고의 성과를
                추구합니다.
              </Text>
            </Image>
            <Image>
              <ImageOverlay
                source={working2}
                style={{ borderRadius: "16px" }}
              />
              <Text
                type="body1"
                weight="bold"
                color="white"
                style={{
                  position: "relative",
                  width: "249px",
                  height: "72px",
                  bottom: "250px",
                  left: "40px",
                }}
              >
                우리는 고객과 공감하여 실질적 시장 가치를 창출하고 동료와
                협업하여 함께 성장합니다.
              </Text>
            </Image>
            <Image>
              <ImageOverlay
                source={working3}
                style={{ borderRadius: "16px" }}
              />
              <Text
                type="body1"
                weight="bold"
                color="white"
                style={{
                  position: "relative",
                  width: "234px",
                  height: "72px",
                  bottom: "250px",
                  left: "40px",
                }}
              >
                우리는 올바르고 정의로운 동기를 바탕으로 사회에 도움이 되는
                사업을 추구합니다.
              </Text>
            </Image>
          </div>
        </div>
      </Container>
      <Container height="543">
        <ImageOverlay source={groupPhoto2} />
      </Container>
      <Container
        style={{
          position: "relative",
          bottom: "370px",
          height: "0",
        }}
      >
        <div
          style={{
            position: "relative",
            marginRight: "660px",
          }}
        >
          <Text theme="subtitle" color="white">
            좋은 동료는 <br />
            최고의 복지입니다
          </Text>
          <Text theme="description" color="white" style={{ marginTop: "24px" }}>
            젊고 열정 있는 동료들로부터 주도적이고 책임감 있게 일하는 모습을
            배웁니다.
          </Text>
        </div>
      </Container>
      <Container height="325px" style={{ backgroundColor: colors.gray1 }}>
        <div>
          <img
            src={arrowLeft}
            style={{
              width: "40px",
              height: "40px",
              position: "relative",
              right: "80px",
              top: "135px",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={klee}
            style={{
              width: "80px",
              height: "80px",
              marginTop: "68px",
              alignSelf: "center",
            }}
          />
          <Text type="body1" style={{ width: "800px", height: "48px" }}>
            개발자로서 이상한 말일 수도 있지만 기술은 그냥 도구일 뿐이니까,
            사용자에게 정말로 필요한 - 어쩌면 사용자 본인들도 그게 필요한지 잘
            모를 - 그런 기능, 서비스를 만들고 싶어요. 우리가 가진 아이디어나
            기술을 자랑하는 그런 것 말고요.
          </Text>
        </div>
        <div>
          <img
            src={arrowRight}
            style={{
              width: "40px",
              height: "40px",
              position: "relative",
              left: "80px",
              top: "135px",
            }}
          />
        </div>
      </Container>
      <Container style={{ marginTop: "120px", marginBottom: "120px" }}>
        <div
          style={{
            flexDirection: "column",
          }}
        >
          <div style={{ marginRight: "635px" }}>
            <Text theme="subtitle">동반성장을 추구합니다</Text>
            <Text
              theme="description"
              style={{ width: "461px", marginBottom: "64px" }}
            >
              회사를 위해 일하기에 앞서 자기 자신의 성장을 위해 최선을 다하기를
              기대합니다. 회사의 성장은 그러한 인재들이 모인 자연스러운 결과물일
              것입니다.
            </Text>
          </div>
          <div style={{ display: "flex", gap: "40px" }}>
            <img
              src={growth1}
              style={{
                width: "336px",
                height: "280px",
                borderRadius: "16px",
              }}
            />
            <img
              src={growth2}
              style={{
                width: "336px",
                height: "280px",
                borderRadius: "16px",
              }}
            />
            <img
              src={growth3}
              style={{
                width: "336px",
                height: "280px",
                borderRadius: "16px",
              }}
            />
          </div>
        </div>
      </Container>

      <Container
        style={{
          backgroundColor: colors.gray1,
        }}
      >
        <div
          style={{
            flexDirection: "column",
            marginRight: "250px",
            marginTop: "120px",
          }}
        >
          <Text
            theme="subtitle"
            style={{ justifyContent: "center", marginBottom: "64px" }}
          >
            복리후생
          </Text>
          <Benefit />
        </div>
      </Container>
    </div>
  );
}
