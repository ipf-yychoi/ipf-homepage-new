import React from "react";

import Text from "./Text";

type Props = {
  color?: "white" | "black";
  children: any;
  style?: React.CSSProperties;
};

function Description({ color = "black", style, children }: Props) {
  return (
    <Text type="body2" style={{ ...style, color }}>
      {children}
    </Text>
  );
}

export default Description;
