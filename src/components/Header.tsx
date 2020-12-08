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

function Header({ children }: Props) {
  return (
    <HeaderContainer>
      <Navigation mode="dark" />
      <Title>{children}</Title>
    </HeaderContainer>
  );
}

export default Header;
