import React from "react";
import styled from "styled-components";

import colors from "../layouts/colors";
import Typography from "../Typography";

import { Link } from "gatsby";

import logo from "../images/redLogo.png";

const HeaderComponent = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 4.5rem;

  ${Typography("body", 1, 400)};
  line-height: 2.5;
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
`;

const Nav = styled.nav`
  margin: 0 auto;
`;

const NavItems = styled.ul`
  display: flex;
  gap: 2.5rem;
`;

export function Header() {
  return (
    <HeaderComponent>
      <Link to="/" style={{ margin: "0 auto" }}>
        <Logo src={logo} alt="logo" />
      </Link>
      <Nav>
        <NavItems>
          <li>
            <Link activeStyle={{ color: colors.primary }} to="/About/">
              About
            </Link>
          </li>
          <li>
            <Link activeStyle={{ color: colors.primary }} to="/Product/">
              Product
            </Link>
          </li>
          <li>
            <Link to="/News/">News</Link>
          </li>
          <li>
            <Link to="/Career/">Career</Link>
          </li>
          <li>
            <Link to="/Contact/">Contact</Link>
          </li>
        </NavItems>
      </Nav>
    </HeaderComponent>
  );
}
