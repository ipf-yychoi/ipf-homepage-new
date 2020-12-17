import React from "react";
import styled from "styled-components";

import { high_resolution } from "../layouts/responsive";
import colors from "../layouts/colors";
import Typography from "../assets/Typography";

import download from "../assets/images/download.png";
import download_2x from "../assets/images/download@2x.png";

type ButtonDownloadProps = {
  source: any;
  children: string;
  style: React.CSSProperties;
};

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: fit-content;
  height: 53px;

  white-space: nowrap;

  &:hover a {
    background-color: #f16a4f;
    padding-right: 96px;
    transition: all 0.1s ease-in-out;

    :after {
      left: 56px;
      transition: left 0.1s ease-in-out;
    }
  }

  &:active a {
    background-color: #d7482b;
  }
`;

const ButtonComponent = styled.a`
  background-color: ${colors.primary};
  padding: 16px 80px 16px 24px;
  width: 100%;
  height: 100%;

  color: white;
  border: none;
  border-radius: 8px;

  line-height: 2.1rem;
  text-align: left;
  cursor: pointer;

  ${Typography("body", 1.4, 700)};
`;

const DownloadIcon = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 17px;
  right: 26px;

  cursor: pointer;

  background-image: url(${download});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${high_resolution} {
    background-image: url(${download_2x});
  }
`;

export default function ButtonDownload({
  source,
  children,
  style,
}: ButtonDownloadProps) {
  return (
    <ButtonWrapper style={style}>
      <ButtonComponent href={source} download>
        {children}
      </ButtonComponent>
      <DownloadIcon />
    </ButtonWrapper>
  );
}
