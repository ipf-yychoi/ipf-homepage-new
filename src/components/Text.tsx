import React from "react";
import styled from "styled-components";

type TextType = "header1" | "header2" | "body1" | "body2" | "caption";
type TextWeights = "bold" | "normal";

type Props = {
  tag?: keyof JSX.IntrinsicElements;
  type?: TextType;
  weight?: TextWeights;
  style?: React.CSSProperties;
  children: any;
};

const TextComponent = styled.div``;

function Text({ tag = "p", type, weight, style, children }: Props) {
  let fontSize, fontWeight, lineHeight;

  if (tag === "caption") type = "caption";

  weight === "bold" ? (fontWeight = 700) : (fontWeight = 400);

  switch (type) {
    case "header1":
      fontSize = 38;
      fontWeight = 700;
      lineHeight = 42;
      break;
    case "header2":
      fontSize = 18;
      fontWeight = 700;
      lineHeight = 24;
      break;
    case "body1":
      fontSize = 16;
      lineHeight = 24;
      break;
    case "body2":
      fontSize = 14;
      lineHeight = 21;
      break;
    case "caption":
      fontSize = 12;
      lineHeight = 18;
      break;
  }

  return (
    <TextComponent
      as={tag}
      style={{
        ...style,
        fontSize: !style?.fontSize ? fontSize : style?.fontSize,
        fontWeight: !style?.fontWeight ? fontWeight : style?.fontWeight,
        lineHeight: !style?.lineHeight ? lineHeight + "px" : style?.lineHeight,
      }}
    >
      {children}
    </TextComponent>
  );
}

export default Text;
