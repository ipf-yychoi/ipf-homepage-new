import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import colors from "../layouts/colors";
import Typography from "../assets/Typography";

import HamburgerMenu from "../components/HamburgerMenu";

import ipf_red from "../assets/images/ipf_red.png";
import img_header_hamburger from "../assets/images/img_header_hamburger.png";
import ic_close from "../assets/images/ic_close.png";

type Props = {
  mode?: "light" | "dark";
};

type HeaderComponentProps = {
  open: boolean;
  mode: "light" | "dark";
};

const HeaderComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 320px) / 2);

  position: fixed;
  background-color: ${(props: HeaderComponentProps) =>
    props.mode === "dark" ? colors.black : "white"};
  z-index: 99;

  min-width: 100%;
  height: 7.2rem;

  ${Typography("body", 1.6, 400)};
  line-height: 2.5;
  box-shadow: ${(props: HeaderComponentProps) =>
    props.open ? "" : "0px 4px 10px rgba(0, 0, 0, 0.08)"};

  @media screen and (min-width: 1040px) {
    padding: 0 calc((100% - 1040px) / 2);
    box-shadow: none;
  }
`;

const HamburgerButton = styled.button`
  display: block;
  width: 24px;
  height: 72px;
  line-height: 72px;

  outline: none;
  border: none;
  background-color: transparent;

  background-image: ${(props: HeaderComponentProps) =>
    props.open ? `url(${ic_close})` : `url(${img_header_hamburger})`};

  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;

  filter: brightness(0)
    ${(props: HeaderComponentProps) => props.mode === "dark" && "invert(1)"};

  @media screen and (min-width: 1040px) {
    display: none;
  }
`;

const Logo = styled.img``;

const NavItems = styled.ul`
  display: none;
  gap: 4rem;
  line-height: 72px;

  @media only screen and (min-width: 1040px) {
    display: flex;
  }
`;

const LinkStyled = styled(Link)`
  font-family: "Roboto", sans-serif;

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

  return (
    <>
      <HamburgerMenu open={isOpened} lang={"locale"} onClick={handleClick} />
      <HeaderComponent open={isOpened} mode={mode}>
        <Link to={"/"}>
          <Logo src={ipf_red} alt="logo" />
        </Link>
        <HamburgerButton
          mode={mode}
          open={isOpened}
          onClick={handleClick}
        ></HamburgerButton>

        <NavItems>
          <li key="about">
            <LinkStyled
              style={{ color }}
              activeStyle={{ color: colors.primary }}
              to={"/About/"}
            >
              About
            </LinkStyled>
          </li>
          <li key="product">
            <LinkStyled
              style={{ color }}
              activeStyle={{ color: colors.primary }}
              to={"/Product/"}
            >
              Product
            </LinkStyled>
          </li>
          <li key="news">
            <LinkStyled
              style={{ color }}
              activeStyle={{ color: colors.primary }}
              to={"/News/"}
            >
              News
            </LinkStyled>
          </li>
          <li key="career">
            <LinkStyled
              style={{ color }}
              activeStyle={{ color: colors.primary }}
              to={"/Career/"}
            >
              Career
            </LinkStyled>
          </li>
          <li key="contact">
            <LinkStyled
              style={{ color }}
              activeStyle={{ color: colors.primary }}
              to={"/Contact/"}
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
