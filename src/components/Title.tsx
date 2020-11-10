import React from "react";
import styled from "styled-components";

type Props = {
  children: any;
  style?: React.CSSProperties;
};

const TitleComponent = styled.h1`
  font-size: 50px;
  font-weight: 900;
  line-height: 54px;
`;

function Title({ style, children }: Props) {
  return <TitleComponent style={style}>{children}</TitleComponent>;
}

export default Title;
