import React from "react";
import styled from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";

import colors from "../layouts/colors";
import Typography from "../assets/Typography";

type HamburgerMenuProps = {
  open: boolean;
  onClick: () => void;
};

type HeaderComponentProps = {
  open: boolean;
};

const HeaderComponent = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  transform: ${({ open }: HeaderComponentProps) =>
    open ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  height: 100%;
  width: 100%;

  padding: 2rem;
  padding-top: 8rem;

  text-align: left;
  position: fixed;
  overflow-y: auto;
  top: 4.4rem;
  left: 0;
  z-index: 99;
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${Typography("body", 3.2, 700)}
`;

const LinkStyled = styled(Link)`
  color: ${colors.black};
  transition: all 0.1s linear;

  :hover {
    color: #ef5030;
  }

  :active {
    color: ${colors.primary};
  }
`;

export default function HamburgerMenu({ open, onClick }: HamburgerMenuProps) {
  return (
    <HeaderComponent open={open}>
      <NavItems>
        <li>
          <LinkStyled activeStyle={{ color: colors.primary }} to={"/About/"}>
            About
          </LinkStyled>
        </li>
        <li>
          <LinkStyled activeStyle={{ color: colors.primary }} to={"/Product/"}>
            Product
          </LinkStyled>
        </li>
        <li>
          <LinkStyled activeStyle={{ color: colors.primary }} to={"/News/"}>
            News
          </LinkStyled>
        </li>
        <li>
          <LinkStyled activeStyle={{ color: colors.primary }} to={"/Career/"}>
            Career
          </LinkStyled>
        </li>
        <li>
          <LinkStyled activeStyle={{ color: colors.primary }} to={"/Contact/"}>
            Contact
          </LinkStyled>
        </li>
      </NavItems>
    </HeaderComponent>
  );
}
