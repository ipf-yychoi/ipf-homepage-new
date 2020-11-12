import React from "react";

import colors from "../layouts/colors";

import Title from "./Title";
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
        <Title
          style={{
            position: "relative",
            top: "160px",
            marginRight: marginRight,
            color: "white",
          }}
        >
          {title}
        </Title>
      </Container>
    </>
  );
}

export default HeaderContainer;
