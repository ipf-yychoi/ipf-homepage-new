import React from "react";
import styled from "styled-components";

import Typography from "../Typography";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Product/Services";

import img_spindlebooks_logo from "../images/Product/img_spindlebooks_logo.png";
import img_spindlebooks_ipad from "../images/Product/img_spindlebooks_ipad.png";
import img_viewer_web from "../images/Product/img_viewer_web.png";
import img_viewer_ios from "../images/Product/img_viewer_ios.png";
import img_viewer_android from "../images/Product/img_viewer_android.png";
import img_viewer_windows from "../images/Product/img_viewer_windows.png";
import img_viewer_mac from "../images/Product/img_viewer_mac.png";
import img_viewer_linux from "../images/Product/img_viewer_linux.png";
import img_sat from "../images/Product/img_sat.png";
import img_server from "../images/Product/img_server.png";
import img_cloud_sync from "../images/Product/img_cloud_sync.png";
import img_logo_olb from "../images/Product/img_logo_olb.png";
import img_product_olb from "../images/Product/img_product_olb.png";

import img_product_readingn from "../images/Product/img_product_readingn.png";
import img_logo_readingn from "../images/Product/img_logo_readingn.png";
import img_product_orc from "../images/Product/img_product_orc.png";
import img_logo_orc from "../images/Product/img_logo_orc.png";
import img_product_brc from "../images/Product/img_product_brc.png";
import img_logo_brc from "../images/Product/img_logo_brc.png";
import img_product_popreader from "../images/Product/img_product_popreader.png";
import img_logo_popreader from "../images/Product/img_logo_popreader.png";

const Title = styled.h2`
  padding: 0 calc((100% - 1040px) / 2);

  ${Typography("heading1")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0 calc((100% - 1040px) / 2);

  margin: 120px 0;

  width: 100%;
`;

const Column = styled.div`
  flex-direction: column;
  margin: auto 0;
`;

const Logo = styled.img`
  margin-bottom: 24px;
`;

const Description = styled.p`
  ${Typography("body", 0.875)};

  width: 381px;
  word-break: keep-all;
`;

const Viewers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 9px;
  margin-bottom: 9px;
`;

const ViewerImage = styled.img`
  border-radius: 8px;
`;

export default function Product() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header>Product</Header>
      <Container>
        <Column>
          <Logo src={img_spindlebooks_logo} />
          <Description>
            특허받은 기술로 구현한 디지털 교과서 플랫폼 Spindle Books™는
            아이포트폴리오의 핵심 솔루션입니다. 옥스포드 대학출판부의 공식
            디지털 교과서 플랫폼으로 채택된 이후 지속적으로 전 세계의 영어
            교육기관, 대형 출판사에서 도입 요청을 받고 있습니다.
          </Description>
        </Column>
        <img src={img_spindlebooks_ipad} />
      </Container>
      <Container style={{ justifyContent: "center" }}>
        <Viewers>
          <ViewerImage src={img_viewer_web} />
          <ViewerImage src={img_viewer_ios} />
          <ViewerImage src={img_viewer_android} />
          <ViewerImage src={img_viewer_windows} />
          <ViewerImage src={img_viewer_mac} />
          <ViewerImage src={img_viewer_linux} />
        </Viewers>
        <Viewers>
          <ViewerImage src={img_sat} />
          <ViewerImage src={img_server} />
          <ViewerImage src={img_cloud_sync} />
        </Viewers>
      </Container>
      <Title>Spindle in Actions</Title>
      <Container>
        <Column>
          <Logo src={img_logo_olb} />
          <Description>
            전 세계 70개국 200만 명의 학생들이 옥스포드 대학출판부의 공식 디지털
            교과서 플랫폼 Oxford Learner’s Bookshelf(OLB)를 활용해 영어 수업을
            받고 있습니다.
          </Description>

          <Services />
        </Column>
        <img src={img_product_olb} />
      </Container>
      <Container>
        <img src={img_product_readingn} />
        <Column>
          <Logo src={img_logo_readingn} />
          <Description>
            리딩앤은 세계적인 베스트셀러 Oxford Reading Tree를 비롯한
            펭귄랜덤하우스, 콜린스 출판사의 유명 시리즈를 디지털로 구독할 수
            있는 프리미엄 리딩 플랫폼입니다.
          </Description>

          <Services all />
        </Column>
      </Container>
      <Container>
        <Column>
          <Logo src={img_logo_orc} />
          <Description>
            Oxford Reading Club 은 PaaS(Platform as a Service) 형태로 제공되는
            디지털 리딩 플랫폼으로서 일본을 시작으로 터키, 스페인, 브라질 등
            다양한 국가로 뻗어나가고 있습니다.
          </Description>

          <Services />
        </Column>
        <img src={img_product_orc} />
      </Container>
      <Container>
        <img src={img_product_brc} />
        <Column>
          <Logo src={img_logo_brc} />
          <Description>
            Big Reading Club은 Spindle Books™ 기술로 구현된 옥스포드 대학출판부
            중국 법인이 선보인 최초의 디지털 리딩 플랫폼입니다.
          </Description>
          <Services />
        </Column>
      </Container>
      <Container>
        <Column>
          <Logo src={img_logo_popreader} />
          <Description>
            중국 최대 교육기관인 신동방(New Oriental Education & Technology)은
            Spindle Books™ 기술을 채택해 자체 리딩 플랫폼인 POP Reader를
            론칭했습니다.
          </Description>
          <Services />
        </Column>
        <img src={img_product_popreader} />
      </Container>
      <Footer />
    </div>
  );
}
