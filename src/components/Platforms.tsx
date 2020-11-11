import React from "react";
import styled from "styled-components";

import web from "../images/web.png";
import iOS from "../images/iOS.png";
import android from "../images/android.png";
import youtube from "../images/youtube.png";

type PlatformTypes = "web" | "iOS" | "android" | "youtube";

type Props = {
  sources: Array<PlatformTypes>;
};

const Platform = styled.h1`
  font-size: 50px;
  font-weight: 900;
  line-height: 54px;
  margin: 0;
`;

function Platforms({ sources }: Props) {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {sources.map((e) => {
        let source;
        switch (e) {
          case "web":
            source = web;
            break;
          case "iOS":
            source = iOS;
            break;
          case "android":
            source = android;
            break;
          case "youtube":
            source = youtube;
            break;
        }
        return <img src={source} style={{ width: "58px", height: "58px" }} />;
      })}
    </div>
  );
}

export default Platforms;
