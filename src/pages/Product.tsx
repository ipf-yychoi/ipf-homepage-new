import React from "react";

import colors from "../layouts/colors";

import Header from "../components/Header";
import Container from "../components/Container";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Platforms from "../components/Platforms";

import spindleBooks from "../images/spindleBooks.png";
import spindleBooksOnIPad from "../images/spindleBooksOnIpad.png";
import webViewer from "../images/webViewer.png";
import iOSViewer from "../images/iOSViewer.png";
import androidViewer from "../images/androidViewer.png";
import windowsViewer from "../images/windowsViewer.png";
import macViewer from "../images/macViewer.png";
import linuxViewer from "../images/linuxViewer.png";
import authoringTools from "../images/authoringTools.png";
import backendServers from "../images/backendServers.png";
import cloudSync from "../images/cloudSync.png";
import olbLogo from "../images/olbLogo.png";
import olbProductsOnMedia from "../images/olbProductsOnMedia.png";
import readingNProductsOnMedia from "../images/reading&ProductsOnMedia.png";
import readingNLogo from "../images/reading&Logo.png";
import orcLogo from "../images/orcLogo.png";
import orcProductsOnMedia from "../images/orcProductsOnMedia.png";
import brcLogo from "../images/brcLogo.png";
import brcProductsOnMedia from "../images/brcProductsOnMedia.png";
import popReaderLogo from "../images/popReaderLogo.png";
import popReaderProductsOnMedia from "../images/popReaderProductsOnMedia.png";

export default function Product() {
  return (
    <div style={{ width: "100%" }}>
      <Header mode="dark" />
      <Container height="254" style={{ backgroundColor: colors.black }}>
        <Title
          style={{
            position: "relative",
            top: "160px",
            marginRight: "892px",
            color: "white",
          }}
        >
          Product
        </Title>
      </Container>
      <Container style={{ marginTop: "138px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "105px",
          }}
        >
          <img src={spindleBooks} style={{ width: "240px", height: "60px" }} />
          <Description
            style={{
              position: "relative",
              width: "381px",
              height: "84px",
            }}
          >
            특허받은 기술로 구현한 디지털 교과서 플랫폼 Spindle Books™는
            아이포트폴리오의 핵심 솔루션입니다. 옥스포드 대학출판부의 공식
            디지털 교과서 플랫폼으로 채택된 이후 지속적으로 전 세계의 영어
            교육기관, 대형 출판사에서 도입 요청을 받고 있습니다.
          </Description>
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "105px",
          }}
        >
          <img
            src={spindleBooksOnIPad}
            style={{ width: "480px", height: "204px" }}
          />
        </div>
      </Container>
      <Container style={{ marginTop: "98px" }}>
        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          <img
            src={webViewer}
            style={{ width: "166px", height: "179px", borderRadius: "8px" }}
          />
          <img
            src={iOSViewer}
            style={{ width: "166px", height: "179px", borderRadius: "8px" }}
          />
          <img
            src={androidViewer}
            style={{ width: "166px", height: "179px", borderRadius: "8px" }}
          />
          <img
            src={windowsViewer}
            style={{ width: "166px", height: "179px", borderRadius: "8px" }}
          />
          <img
            src={macViewer}
            style={{ width: "166px", height: "179px", borderRadius: "8px" }}
          />
          <img
            src={linuxViewer}
            style={{ width: "166px", height: "179px", borderRadius: "8px" }}
          />
        </div>
      </Container>
      <Container style={{ marginTop: "10px" }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <img
            src={authoringTools}
            style={{ width: "350px", height: "246px", borderRadius: "8px" }}
          />
          <img
            src={backendServers}
            style={{ width: "350px", height: "246px", borderRadius: "8px" }}
          />
          <img
            src={cloudSync}
            style={{ width: "350px", height: "246px", borderRadius: "8px" }}
          />
        </div>
      </Container>
      <Container style={{ marginTop: "120px" }}>
        <SubTitle style={{ marginRight: "770px" }}>Spindle in Action</SubTitle>
      </Container>
      <Container style={{ marginTop: "103px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "40px",
          }}
        >
          <img src={olbLogo} style={{ width: "221px", height: "45px" }} />
          <Description
            style={{
              position: "relative",
              width: "400px",
              height: "63px",
              marginBottom: "40px",
            }}
          >
            전 세계 70개국 200만 명의 학생들이 옥스포드 대학출판부의 공식 디지털
            교과서 플랫폼 Oxford Learner’s Bookshelf(OLB)를 활용해 영어 수업을
            받고 있습니다.
          </Description>
          <Platforms sources={["web", "iOS", "android"]} />
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "40px",
          }}
        >
          <img
            src={olbProductsOnMedia}
            style={{ width: "600px", height: "376px" }}
          />
        </div>
      </Container>
      <Container style={{ marginTop: "160px" }}>
        <div
          style={{
            position: "relative",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "100px",
          }}
        >
          <img
            src={readingNProductsOnMedia}
            style={{ width: "511px", height: "303px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "100px",
          }}
        >
          <img src={readingNLogo} style={{ width: "243px", height: "40px" }} />
          <Description
            style={{
              position: "relative",
              width: "400px",
              height: "63px",
              marginBottom: "40px",
            }}
          >
            리딩앤은 세계적인 베스트셀러 Oxford Reading Tree를 비롯한
            펭귄랜덤하우스, 콜린스 출판사의 유명 시리즈를 디지털로 구독할 수
            있는 프리미엄 리딩 플랫폼입니다.
          </Description>
          <Platforms sources={["web", "iOS", "android", "youtube"]} />
        </div>
      </Container>
      <Container style={{ marginTop: "160px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "40px",
          }}
        >
          <img src={orcLogo} style={{ width: "300px", height: "33px" }} />
          <Description
            style={{
              position: "relative",
              width: "400px",
              height: "63px",
              marginBottom: "40px",
            }}
          >
            Oxford Reading Club 은 PaaS(Platform as a Service) 형태로 제공되는
            디지털 리딩 플랫폼으로서 일본을 시작으로 터키, 스페인, 브라질 등
            다양한 국가로 뻗어나가고 있습니다.
          </Description>
          <Platforms sources={["web", "iOS", "android"]} />
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "40px",
          }}
        >
          <img
            src={orcProductsOnMedia}
            style={{ width: "600px", height: "376px" }}
          />
        </div>
      </Container>
      <Container style={{ marginTop: "160px" }}>
        <div
          style={{
            position: "relative",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "130px",
          }}
        >
          <img
            src={brcProductsOnMedia}
            style={{ width: "408px", height: "350px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "130px",
          }}
        >
          <img src={brcLogo} style={{ width: "300px", height: "36px" }} />
          <Description
            style={{
              position: "relative",
              width: "400px",
              height: "63px",
              marginBottom: "40px",
            }}
          >
            Big Reading Club은 Spindle Books™ 기술로 구현된 옥스포드 대학출판부
            중국 법인이 선보인 최초의 디지털 리딩 플랫폼입니다.
          </Description>
          <Platforms sources={["web", "iOS", "android"]} />
        </div>
      </Container>
      <Container style={{ marginTop: "160px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "95px",
          }}
        >
          <img src={popReaderLogo} style={{ width: "192px", height: "53px" }} />
          <Description
            style={{
              position: "relative",
              width: "400px",
              height: "63px",
              marginBottom: "40px",
            }}
          >
            중국 최대 교육기관인 신동방(New Oriental Education & Technology)은
            Spindle Books™ 기술을 채택해 자체 리딩 플랫폼인 POP Reader를
            론칭했습니다.
          </Description>
          <Platforms sources={["web", "iOS", "android"]} />
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "95px",
          }}
        >
          <img
            src={popReaderProductsOnMedia}
            style={{ width: "480px", height: "334px" }}
          />
        </div>
      </Container>
      <Footer />
    </div>
  );
}
