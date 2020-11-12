import React from "react";

import colors from "../layouts/colors";

import Text from "./Text";
import Header from "./Header";
import Container from "./Container";

type Props = {
  title: string;
  marginRight?: string;
};

function HeaderContainer({ title, marginRight }: Props) {
  return (
    <>
      <Header mode="dark" />
      <Container height="254" style={{ backgroundColor: colors.black }}>
        <Text
          theme="title"
          color="white"
          style={{
            position: "relative",
            top: "130px",
            marginRight: marginRight,
          }}
        >
          {title}
        </Text>
      </Container>
    </>
  );
}

export default HeaderContainer;
