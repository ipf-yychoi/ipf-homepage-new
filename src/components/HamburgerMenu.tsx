import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import colors from "../layouts/colors";
import Typography from "../Typography";

type HamburgerMenuProps = {
  open: boolean;
  lang: string;
  onClick: () => void;
};

const HeaderComponent = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  transform: ${({ open }: { open: boolean }) =>
    open ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  height: 100%;
  width: 100%;

  padding: 20px;
  padding-top: 80px;

  text-align: left;
  position: fixed;
  overflow-y: auto;
  top: 72px;
  left: 0;
  z-index: 99;
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${Typography("body", 3.2, 700)}
`;

const LinkStyled = styled(Link)`
  color: ${colors.black};
  :hover {
    color: #ef5030;
  }

  :focus {
    color: ${colors.primary};
  }
`;

export default function HamburgerMenu({
  open,
  lang,
  onClick,
}: HamburgerMenuProps) {
  return (
    <HeaderComponent open={open}>
      <NavItems>
        <li>
          <LinkStyled
            activeStyle={{ color: colors.primary }}
            to={lang + "/About/"}
          >
            About
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            activeStyle={{ color: colors.primary }}
            to={lang + "/Product/"}
          >
            Product
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            activeStyle={{ color: colors.primary }}
            to={lang + "/News/"}
          >
            News
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            activeStyle={{ color: colors.primary }}
            to={lang + "/Career/"}
          >
            Career
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            activeStyle={{ color: colors.primary }}
            to={lang + "/Contact/"}
          >
            Contact
          </LinkStyled>
        </li>
      </NavItems>
    </HeaderComponent>
  );
}
