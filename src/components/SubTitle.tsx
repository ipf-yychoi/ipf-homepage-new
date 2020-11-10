import React from "react";

import Text from "./Text";

type Props = {
  color?: "white" | "black";
  children: any;
  style?: React.CSSProperties;
};

const styleSubTitle: React.CSSProperties = {
  display: "flex",
  margin: "8px 0px",
  color: "white",
};

function SubTitle({ color = "black", style, children }: Props) {
  return (
    <Text
      tag="h2"
      type="header1"
      weight="normal"
      style={{ ...styleSubTitle, ...style, color }}
    >
      {children}
    </Text>
  );
}

export default SubTitle;
