import React from "react";
import styled from "styled-components";

import Container from "../../components/Container";

import img_viewer_web from "../../assets/images/Product/img_viewer_web.png";
import img_viewer_ios from "../../assets/images/Product/img_viewer_ios.png";
import img_viewer_android from "../../assets/images/Product/img_viewer_android.png";
import img_viewer_windows from "../../assets/images/Product/img_viewer_windows.png";
import img_viewer_mac from "../../assets/images/Product/img_viewer_mac.png";
import img_viewer_linux from "../../assets/images/Product/img_viewer_linux.png";
import img_sat from "../../assets/images/Product/img_sat.png";
import img_server from "../../assets/images/Product/img_server.png";
import img_cloudsync from "../../assets/images/Product/img_cloudsync.png";

const ContainerStyled = styled(Container)`
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 0;
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

export default function ViewerSection() {
  return (
    <ContainerStyled style={{ justifyContent: "center" }}>
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
    </ContainerStyled>
  );
}
