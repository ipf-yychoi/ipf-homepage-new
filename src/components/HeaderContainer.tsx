import React from "react";
import styled from "styled-components";

import colors from "../layouts/colors";
import Typography from "../Typography";

import Navigation from "./Navigation";
import Container from "./Container";

type Props = {
  title: string;
  marginRight?: string;
};

const Title = styled.h1`
  position: relative;
  top: 130px;
  color: white;

  ${Typography("hero")};
`;

function HeaderContainer({ title, marginRight }: Props) {
  return (
    <>
      <Navigation mode="dark" />
      <Container height="254" style={{ backgroundColor: colors.black }}>
        <Title
          style={{
            marginRight: marginRight,
          }}
        >
          {title}
        </Title>
      </Container>
    </>
  );
}

export default HeaderContainer;
