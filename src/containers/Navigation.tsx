import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";

import colors from "../layouts/colors";
import Typography from "../assets/Typography";

import { responsive, high_resolution } from "../layouts/responsive";

import HamburgerMenu from "../components/HamburgerMenu";

import ipf_red from "../assets/images/ipf_red.png";
import ipf_red_2x from "../assets/images/ipf_red@2x.png";
import img_header_hamburger from "../assets/images/img_header_hamburger.png";
import img_header_hamburger_2x from "../assets/images/img_header_hamburger@2x.png";
import img_header_hamburger_black from "../assets/images/img_header_hamburger_black.png";
import img_header_hamburger_black_2x from "../assets/images/img_header_hamburger_black@2x.png";
import ic_close from "../assets/images/ic_close.png";
import ic_close_2x from "../assets/images/ic_close@2x.png";

type Props = {
  mode?: "light" | "dark";
};

type HeaderComponentProps = {
  contrastColor: string;
  open: boolean;
};

type HamburgerButtonProps = {
  contrastColor: string;
  open: boolean;
};

const HeaderComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 32rem) / 2);

  position: fixed;
  background-color: transparent;
  z-index: 99;

  min-width: 100%;
  height: 7.2rem;

  ${Typography("body", 1.6, 400)};
  line-height: 2.5;
  box-shadow: ${(props: HeaderComponentProps) =>
    props.open ? "" : "0 4px 10px rgba(0, 0, 0, 0.08)"};

  transition: background-color 0.1s linear;

  background-color: ${(props: HeaderComponentProps) =>
    !props.open && props.contrastColor === "white" ? colors.black : "white"};

  @media ${responsive.conditionForTablet} {
    padding: 0 calc((100% - 104rem) / 2);
    box-shadow: none;
  }
`;

const HamburgerButton = styled.button`
  display: block;
  width: 2.4rem;
  height: 7.2rem;
  line-height: 7.2rem;

  outline: none;
  border: none;
  background-color: transparent;

  background-image: ${(props: HamburgerButtonProps) =>
    props.open && `url(${ic_close})`};

  background-image: ${(props: HamburgerButtonProps) =>
    !props.open &&
    props.contrastColor === "white" &&
    `url(${img_header_hamburger})`};

  background-image: ${(props: HamburgerButtonProps) =>
    !props.open &&
    props.contrastColor === colors.black &&
    `url(${img_header_hamburger_black})`};

  @media ${high_resolution} {
    background-image: ${(props: HamburgerButtonProps) =>
      props.open && `url(${ic_close_2x})`};

    background-image: ${(props: HamburgerButtonProps) =>
      !props.open &&
      props.contrastColor === "white" &&
      `url(${img_header_hamburger_2x})`};

    background-image: ${(props: HamburgerButtonProps) =>
      !props.open &&
      props.contrastColor === colors.black &&
      `url(${img_header_hamburger_black_2x})`};
  }

  background-size: 2.4rem 2.4rem;
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;

  @media ${responsive.conditionForTablet} {
    display: none;
  }
`;

const Logo = styled.span`
  position: fixed;
  width: 12.8rem;
  height: 5.5rem;
  background-size: cover;
  background-repeat: no-repeat;

  background-image: url(${ipf_red});

  @media ${high_resolution} {
    background-image: url(${ipf_red_2x});
  }
`;

const NavItems = styled.ul`
  display: none;
  gap: 4rem;
  line-height: 7.2rem;

  @media ${responsive.conditionForTablet} {
    display: flex;
  }
`;

type LinkProps = {
  contrastColor: string;
};

const LinkStyled = styled(Link)`
  font-family: "Roboto", sans-serif;
  ${Typography("body", 1.6, 400)};
  transition: 0.1s linear;
  color: ${(props: LinkProps) => props.contrastColor};

  :hover {
    color: #ef5030;
  }

  :active {
    color: ${colors.primary};
    font-weight: 700;
  }
`;

function Navigation({ mode = "light" }: Props) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [contrastColor, setTextColor] = useState(
    mode === "light" ? colors.black : "white"
  );
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    if (window.screen.width >= 1040) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [contrastColor]);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const handleScroll = (e: Event) => {
    if (document.scrollingElement && mode === "dark") {
      var scrolled = document.scrollingElement.scrollTop;
      if ((scrolled >= 290 && !isMobile) || (isMobile && scrolled >= 190)) {
        setTextColor(colors.black);
      } else {
        setTextColor("white");
      }
    }
  };

  return (
    <>
      <HamburgerMenu open={isOpened} lang={"locale"} onClick={handleClick} />
      <HeaderComponent open={isOpened} contrastColor={contrastColor}>
        <Link to={"/"}>
          <Logo />
        </Link>
        <HamburgerButton
          contrastColor={contrastColor}
          open={isOpened}
          onClick={handleClick}
        ></HamburgerButton>
        <NavItems>
          <li key="about">
            <LinkStyled
              contrastColor={contrastColor}
              activeStyle={{ color: colors.primary }}
              to={"/About/"}
            >
              About
            </LinkStyled>
          </li>
          <li key="product">
            <LinkStyled
              contrastColor={contrastColor}
              activeStyle={{ color: colors.primary }}
              to={"/Product/"}
            >
              Product
            </LinkStyled>
          </li>
          <li key="news">
            <LinkStyled
              contrastColor={contrastColor}
              activeStyle={{ color: colors.primary }}
              to={"/News/"}
            >
              News
            </LinkStyled>
          </li>
          <li key="career">
            <LinkStyled
              contrastColor={contrastColor}
              activeStyle={{ color: colors.primary }}
              to={"/Career/"}
            >
              Career
            </LinkStyled>
          </li>
          <li key="contact">
            <LinkStyled
              contrastColor={contrastColor}
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
