import React from "react";
import styled, { css } from "styled-components";

import colors from "../layouts/colors";

import { Link } from "gatsby";

import logo from "../images/redLogo.png";

type Mode = "light" | "dark";

type Props = {
  mode?: Mode;
  style?: React.CSSProperties;
};

type HeaderProps = {
  mode?: Mode;
};

const darkModeStyle = css`
  background-color: ${colors.black};
  color: white;
`;

const lightModeStyle = css`
  background-color: white;
  color: black;
`;

const HeaderComponent = styled.header`
  width: 100%;
  height: 72px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 0 auto;

  ${(props: HeaderProps) =>
    props.mode === "dark" ? darkModeStyle : lightModeStyle};
`;

const Logo = styled.img`
  width: 128px;
  height: 55px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  height: 40px;
  margin: auto;
`;

const LinkTo = styled(Link)`
  width: 75px;
  height: 40px;
  text-align: center;
  color: white;

  ${(props: HeaderProps) =>
    props.mode === "dark" ? darkModeStyle : lightModeStyle};
`;

function Header({ mode = "light", style }: Props) {
  return (
    <HeaderComponent mode={mode} style={style}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flex: "auto",
          margin: "0 23%",
        }}
      >
        <div>
          <LinkTo to="/" mode={mode} style={{}}>
            <Logo src={logo} style={{ position: "relative" }} alt="logo" />
          </LinkTo>
        </div>
        <div>
          <Nav>
            <LinkTo
              mode={mode}
              activeStyle={{ color: colors.primary }}
              to="/About/"
            >
              About
            </LinkTo>
            <LinkTo mode={mode} to="/Product/">
              Product
            </LinkTo>
            <LinkTo mode={mode} to="/News/">
              News
            </LinkTo>
            <LinkTo mode={mode} to="/Career/">
              Career
            </LinkTo>
            <LinkTo mode={mode} to="/Contact/">
              Contact
            </LinkTo>
          </Nav>
        </div>
      </div>
    </HeaderComponent>
  );
}

export default Header;
