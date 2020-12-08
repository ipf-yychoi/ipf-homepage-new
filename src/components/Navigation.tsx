import React from "react";
import styled from "styled-components";

import colors from "../layouts/colors";
import Typography from "../Typography";

import { Link } from "gatsby";

import ipf_red from "../images/ipf_red.png";

type Props = {
  mode?: "light" | "dark";
};

const HeaderComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 1040px) / 2);

  width: 100%;
  height: 4.5rem;

  ${Typography("body", 1, 400)};
  line-height: 2.5;
`;

const Logo = styled.img``;

const NavItems = styled.ul`
  display: flex;
  gap: 2.5rem;
  line-height: 4.5rem;
`;

const LinkStyled = styled(Link)`
  :hover {
    color: #ef5030;
  }

  :focus {
    color: ${colors.primary};
  }
`;

function Navigation({ mode = "light" }: Props) {
  let color;
  if (mode === "dark") color = "white";
  return (
    <HeaderComponent>
      <Link to="/">
        <Logo src={ipf_red} alt="logo" />
      </Link>

      <NavItems>
        <li>
          <LinkStyled
            style={{ color }}
            activeStyle={{ color: colors.primary }}
            to="/About/"
          >
            About
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            style={{ color }}
            activeStyle={{ color: colors.primary }}
            to="/Product/"
          >
            Product
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            style={{ color }}
            activeStyle={{ color: colors.primary }}
            to="/News/"
          >
            News
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            style={{ color }}
            activeStyle={{ color: colors.primary }}
            to="/Career/"
          >
            Career
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            style={{ color }}
            activeStyle={{ color: colors.primary }}
            to="/Contact/"
          >
            Contact
          </LinkStyled>
        </li>
      </NavItems>
    </HeaderComponent>
  );
}

export default Navigation;
