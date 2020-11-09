import React from "react";

import Text from "./Text";
import colors from "../layouts/colors";

type Props = {
  children: any;
};

const styleTitle: React.CSSProperties = {
  display: "flex",
  margin: "8px 0px",
  color: colors.primary,
};

function Label({ children }: Props) {
  return (
    <Text tag="h3" type="header2" weight="bold" style={styleTitle}>
      {children}
    </Text>
  );
}

export default Label;
