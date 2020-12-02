import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
import img_cloudsync from "../images/Product/img_cloudsync.png";
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
  ${Typography("body", 1.4)};

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
  const { t } = useTranslation();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Header>{t("HPG-91")}</Header>
      <Container>
        <Column>
          <Logo src={img_spindlebooks_logo} />
          <Description>{t("HPG-30")}</Description>
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
          <ViewerImage src={img_cloudsync} />
        </Viewers>
      </Container>
      <Title>{t("HPG-120")}</Title>
      <Container>
        <Column>
          <Logo src={img_logo_olb} />
          <Description>{t("HPG-31")}</Description>

          <Services />
        </Column>
        <img src={img_product_olb} />
      </Container>
      <Container>
        <img src={img_product_readingn} />
        <Column>
          <Logo src={img_logo_readingn} />
          <Description>{t("HPG-32")}</Description>

          <Services all />
        </Column>
      </Container>
      <Container>
        <Column>
          <Logo src={img_logo_orc} />
          <Description>{t("HPG-33")}</Description>

          <Services />
        </Column>
        <img src={img_product_orc} />
      </Container>
      <Container>
        <img src={img_product_brc} />
        <Column>
          <Logo src={img_logo_brc} />
          <Description>{t("HPG-34")}</Description>
          <Services />
        </Column>
      </Container>
      <Container>
        <Column>
          <Logo src={img_logo_popreader} />
          <Description>{t("HPG-35")}</Description>
          <Services />
        </Column>
        <img src={img_product_popreader} />
      </Container>
      <Footer />
    </div>
  );
}
