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

const HeaderComponent = styled.div`
  width: 100%;
  height: 72px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  ${(props: HeaderProps) =>
    props.mode === "dark" ? darkModeStyle : lightModeStyle};
`;

const Logo = styled.img`
  width: 128px;
  height: 55px;
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: row;

  line-height: 43px;
  height: 40px;

  padding-inline-start: 0;
  justify-content: center;
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
    <HeaderComponent mode={mode} style={{ ...style }}>
      <div
        style={{
          display: "flex",
          marginTop: "0",
          marginBottom: "auto",
          marginRight: "300px",
        }}
      >
        <LinkTo to="/" mode={mode}>
          <Logo src={logo} alt="logo" />
        </LinkTo>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "300px",
        }}
      >
        <Nav>
          <li>
            <LinkTo
              mode={mode}
              activeStyle={{ color: colors.primary }}
              to="/About/"
            >
              About
            </LinkTo>
          </li>
          <li>
            <LinkTo
              mode={mode}
              activeStyle={{ color: colors.primary }}
              style={{ marginLeft: "40px" }}
              to="/Product/"
            >
              Product
            </LinkTo>
          </li>
          <li>
            <LinkTo mode={mode} to="/News/" style={{ marginLeft: "40px" }}>
              News
            </LinkTo>
          </li>
          <li>
            <LinkTo mode={mode} style={{ marginLeft: "40px" }} to="/Career/">
              Career
            </LinkTo>
          </li>
          <li>
            <LinkTo mode={mode} style={{ marginLeft: "40px" }} to="/Contact/">
              Contact
            </LinkTo>
          </li>
        </Nav>
      </div>
    </HeaderComponent>
  );
}

export default Header;
