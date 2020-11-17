import React from "react";

import styled from "styled-components";

type Props = {
  source: string;
  style?: React.CSSProperties;
};

type ImageOverLayProps = {
  source?: string;
};

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: ${(props: ImageOverLayProps) => `url(${props.source})`};
  z-index: -1;
  background-size: cover;
  background-position: center;

  filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.12));

  filter: brightness(50%);
`;

function ImageOverLay({ source, style }: Props) {
  return <Image source={source} style={style} />;
}

export default ImageOverLay;
