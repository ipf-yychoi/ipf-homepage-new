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

const HeaderContainer = styled.header`
  width: 100%;
  height: 20.375rem;

  color: white;
  background-color: ${colors.black};

  padding: 0 calc((100% - 1040px) / 2);
`;

const Title = styled.h1`
  position: relative;
  top: calc(100% - 177px);
  color: white;

  ${Typography("hero")};
`;

function Header({ title, marginRight }: Props) {
  return (
    <HeaderContainer>
      <Navigation />
      <Title>{title}</Title>
    </HeaderContainer>
    // <>
    //   <Navigation />
    //   <Container height="254" style={{ backgroundColor: colors.black }}>
    //     <Title
    //       style={{
    //         marginRight: marginRight,
    //       }}
    //     >
    //       {title}
    //     </Title>
    //   </Container>
    // </>
  );
}

export default Header;
