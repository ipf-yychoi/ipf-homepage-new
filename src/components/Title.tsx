import React from "react";

import Text from "../components/Text";

type Props = {
  color?: "white" | "black";
  children: any;
};

const styleTitle: React.CSSProperties = {
  display: "flex",
  margin: "8px 0px",
  color: "white",
};

function Title({ color = "black", children }: Props) {
  return (
    <Text
      tag="h2"
      type="header1"
      weight="normal"
      style={{ ...styleTitle, color }}
    >
      {children}
    </Text>
  );
}

export default Title;
