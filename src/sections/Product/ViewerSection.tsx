import React from "react";
import styled from "styled-components";

import Container from "../../components/Container";

import img_viewers from "../../assets/images/Product/img_viewers.png";

const ContainerStyled = styled(Container)`
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 0;

  width: 100%;
`;

export default function ViewerSection() {
  return (
    <ContainerStyled style={{ justifyContent: "center" }}>
      <img src={img_viewers} style={{ width: "100%" }} />
      {/* <Viewers>
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
      </Viewers> */}
    </ContainerStyled>
  );
}
