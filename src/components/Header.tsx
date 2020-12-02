import React from "react";
import styled from "styled-components";

import colors from "../layouts/colors";
import Typography from "../Typography";

import Navigation from "./Navigation";

type Props = {
  children: string;
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 32.6rem;

  color: white;
  background-color: ${colors.black};
`;

const Title = styled.h1`
  position: relative;
  top: calc(100% - 80px);
  color: white;
  padding-left: calc((100% - 1040px) / 2);

  ${Typography("hero")};

  @media only screen and (max-width: 1040px) {
    padding-left: calc((100% - 320px) / 2);
  }
`;

function Header({ children }: Props) {
  return (
    <HeaderContainer>
      <Navigation mode="dark" />
      <Title>{children}</Title>
    </HeaderContainer>
  );
}

export default Header;
