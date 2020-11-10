import React from "react";
import styled from "styled-components";

type Props = {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  children: any;
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  width: ${(props: Props) =>
    props.width?.indexOf("px") !== -1 || props.width?.indexOf("%") !== -1
      ? props.width
      : props.width + "px"};
  height: ${(props: Props) =>
    props.height?.indexOf("px") !== -1 || props.height?.indexOf("%") !== -1
      ? props.height
      : props.height + "px"};
  margin: 0 auto;
`;

function Container({
  width = "100%",
  height = "100%",
  style,
  children,
}: Props) {
  return (
    <Wrapper width={width} height={height} style={style}>
      {children}
    </Wrapper>
  );
}

export default Container;
