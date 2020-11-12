import React from "react";
import styled from "styled-components";

import colors from "../layouts/colors";

type TextTheme = "title" | "subtitle" | "label" | "description" | "default";
type TextType = "header1" | "header2" | "body1" | "body2" | "caption";
type TextWeights = "bold" | "normal";
type TextColors = "primary" | "white" | "black" | "gray1" | "gray4";

type Props = {
  theme?: TextTheme;
  tag?: keyof JSX.IntrinsicElements;
  type?: TextType;
  weight?: TextWeights;
  color?: TextColors;
  style?: React.CSSProperties;
  children: any;
};

const TextComponent = styled.div``;

function Text({
  theme = "default",
  tag = "p",
  type,
  weight,
  color = "black",
  style,
  children,
}: Props) {
  let tagType: any;
  let fontSize, fontWeight, lineHeight, textColor;
  let marginTopBottom;
  let marginLeftRight;

  if (theme !== "default") {
    switch (theme) {
      case "title":
        tagType = "h1";
        fontSize = 50;
        fontWeight = 900;
        lineHeight = 54;
        break;
      case "subtitle":
        tagType = "h2";
        fontSize = 38;
        fontWeight = 700;
        lineHeight = 42;
        marginTopBottom = "8px";
        marginLeftRight = "0px";
        break;
      case "label":
        tagType = "h3";
        fontSize = 18;
        fontWeight = 700;
        lineHeight = 24;
        color = "primary";
        marginTopBottom = "8px";
        marginLeftRight = "0";
        break;
      case "description":
        fontSize = 14;
        lineHeight = 21;
        break;
    }
  } else {
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
  }

  switch (color) {
    case "primary":
      textColor = colors.primary;
      break;
    case "white":
      textColor = "white";
      break;
    case "black":
      textColor = colors.black;
      break;
    case "gray1":
      textColor = colors.gray1;
      break;
    case "gray4":
      textColor = colors.gray4;
      break;
  }

  console.log(theme, !style?.margin, !style?.marginRight);
  return (
    <TextComponent
      as={tagType ? tagType : tag}
      style={{
        ...style,
        marginTop: !style?.marginTop ? marginTopBottom : style?.marginTop,
        marginBottom: !style?.marginBottom
          ? marginTopBottom
          : style?.marginBottom,
        marginLeft: !style?.marginLeft ? marginLeftRight : style?.marginLeft,
        marginRight: !style?.marginRight ? marginLeftRight : style?.marginRight,
        fontSize: !style?.fontSize ? fontSize : style?.fontSize,
        fontWeight: !style?.fontWeight ? fontWeight : style?.fontWeight,
        lineHeight: !style?.lineHeight ? lineHeight + "px" : style?.lineHeight,
        color: !style?.color ? textColor : style?.color,
      }}
    >
      {children}
    </TextComponent>
  );
}

export default Text;
