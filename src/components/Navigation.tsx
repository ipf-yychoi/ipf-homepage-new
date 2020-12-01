import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "gatsby";

import colors from "../layouts/colors";
import Typography from "../Typography";

import HamburgerMenu from "./HamburgerMenu";

import ipf_red from "../images/ipf_red.png";
import img_header_hamburger from "../images/img_header_hamburger.png";
import ic_close from "../images/ic_close.png";

type Props = {
  mode?: "light" | "dark";
};

type HeaderComponentProps = {
  open: boolean;
};

type HamburgerButtonProps = {
  open: boolean;
  mode: "light" | "dark";
};

const HeaderComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 1040px) / 2);

  min-width: 100%;
  height: 7.2rem;

  ${Typography("body", 1.6, 400)};
  line-height: 2.5;

  @media screen and (max-width: 1040px) {
    padding: 0 calc((100% - 320px) / 2);
    box-shadow: ${(props: HeaderComponentProps) =>
      props.open ? "" : "0px 4px 10px rgba(0, 0, 0, 0.08)"};
    position: fixed;
    z-index: 99;
    background-color: white;
    box-sizing: border-box;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  width: 24px;
  height: 72px;
  line-height: 72px;

  outline: none;
  border: none;
  background-color: transparent;

  background-image: ${(props: HamburgerButtonProps) =>
    props.open ? `url(${ic_close})` : `url(${img_header_hamburger})`};

  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;

  filter: brightness(0)
    ${(props: HamburgerButtonProps) => props.mode === "dark" && "invert(1)"};

  @media screen and (max-width: 1040px) {
    display: block;
  }
`;

const Logo = styled.img``;

const NavItems = styled.ul`
  display: flex;
  gap: 4rem;
  line-height: 72px;

  @media only screen and (max-width: 1040px) {
    display: none;
  }
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

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const { i18n } = useTranslation();
  const locale = i18n.language !== "ko" ? `/${i18n.language}` : "";

  return (
    <>
      <HamburgerMenu open={isOpened} lang={locale} onClick={handleClick} />
      <HeaderComponent open={isOpened}>
        <Link to={locale === "" ? "/" : locale}>
          <Logo src={ipf_red} alt="logo" />
        </Link>
        <HamburgerButton
          mode={mode}
          open={isOpened}
          onClick={handleClick}
        ></HamburgerButton>

        <NavItems>
          <li>
            <LinkStyled
              style={{ color }}
              activeStyle={{ color: colors.primary }}
              to={locale + "/About/"}
            >
              About
            </LinkStyled>
          </li>
          <li>
            <LinkStyled
              style={{ color }}
              activeStyle={{ color: colors.primary }}
              to={locale + "/Product/"}
            >
              Product
            </LinkStyled>
          </li>
          <li>
            <LinkStyled
              style={{ color }}
              activeStyle={{ color: colors.primary }}
              to={locale + "/News/"}
            >
              News
            </LinkStyled>
          </li>
          <li>
            <LinkStyled
              style={{ color }}
              activeStyle={{ color: colors.primary }}
              to={locale + "/Career/"}
            >
              Career
            </LinkStyled>
          </li>
          <li>
            <LinkStyled
              style={{ color }}
              activeStyle={{ color: colors.primary }}
              to={locale + "/Contact/"}
            >
              Contact
            </LinkStyled>
          </li>
        </NavItems>
      </HeaderComponent>
    </>
  );
}

export default Navigation;
