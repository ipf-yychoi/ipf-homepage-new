import React, { useState, useEffect } from "react";
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

type ComponentProps = {
  linkcolor: string;
  backgroundColor: string;
  open: boolean;
};

type HamburgerProps = {
  backgroundColor: string;
  open: boolean;
};

const HeaderComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 calc((100% - 32rem) / 2);

  position: fixed;
  background-color: ${(props: ComponentProps) =>
    props.open ? "white" : props.backgroundColor};

  z-index: 99;

  width: 100%;
  height: 7.2rem;

  ${Typography("body", 1.6, 400)};
  line-height: 2.5;

  transition: background-color 0.3s ease-in-out;

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
  background-image: url(${img_header_hamburger});

  background-image: ${(props: HamburgerProps) =>
    props.open && `url(${ic_close})`};

  background-image: ${(props: HamburgerProps) =>
    !props.open &&
    props.backgroundColor === "white" &&
    `url(${img_header_hamburger_black})`};

  @media ${high_resolution} {
    background-image: ${(props: HamburgerProps) =>
      props.open && `url(${ic_close_2x})`};

    background-image: ${(props: HamburgerProps) =>
      !props.open &&
      props.backgroundColor === colors.primary &&
      `url(${img_header_hamburger_2x})`};

    background-image: ${(props: HamburgerProps) =>
      !props.open &&
      props.backgroundColor === colors.black &&
      `url(${img_header_hamburger_2x})`};

    background-image: ${(props: HamburgerProps) =>
      !props.open &&
      props.backgroundColor === "white" &&
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
  line-height: 7.2rem;

  @media ${responsive.conditionForTablet} {
    display: flex;
  }
`;

type LinkProps = {
  linkcolor: string;
};

const LinkActiveStyle = {
  color: colors.primary,
  fontWeight: 700,
};

const LinkStyled = styled(Link)`
  font-family: "Roboto", sans-serif;
  ${Typography("body", 1.6, 400)};
  transition: 0.1s linear;
  color: ${(props: LinkProps) =>
    props.linkcolor === colors.black ? colors.black : "white"};

  margin-right: 4rem;

  :hover {
    color: #ef5030;
  }

  :active {
    color: ${colors.primary};
  }
`;

function Navigation({ mode = "light" }: Props) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [headerColor, setHeaderColor] = useState<{
    linkcolor: string;
    backgroundColor: string;
  }>({
    linkcolor: "white",
    backgroundColor: mode === "light" ? colors.primary : colors.black,
  });
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    if (window.screen.width >= 1040) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const handleScroll = (e: Event) => {
    let scrolled;
    if (document.scrollingElement && mode === "dark") {
      scrolled = document.scrollingElement.scrollTop;
      if ((scrolled >= 290 && !isMobile) || (isMobile && scrolled >= 190)) {
        setHeaderColor({ linkcolor: colors.black, backgroundColor: "white" });
      } else {
        setHeaderColor({ linkcolor: "white", backgroundColor: colors.black });
      }
    } else if (document.scrollingElement) {
      scrolled = document.scrollingElement.scrollTop;
      if ((scrolled >= 688 && !isMobile) || (isMobile && scrolled >= 470)) {
        setHeaderColor({ linkcolor: colors.black, backgroundColor: "white" });
      } else {
        setHeaderColor({
          linkcolor: "white",
          backgroundColor: colors.primary,
        });
      }
    }
  };

  return (
    <>
      <HamburgerMenu open={isOpened} onClick={handleClick} />
      <HeaderComponent
        open={isOpened}
        linkcolor={headerColor.linkcolor}
        backgroundColor={headerColor.backgroundColor}
      >
        <Link to={"/"}>
          <Logo />
        </Link>
        <HamburgerButton
          backgroundColor={headerColor.backgroundColor}
          open={isOpened}
          onClick={handleClick}
        ></HamburgerButton>
        <NavItems>
          <li key="about">
            <LinkStyled
              linkcolor={headerColor.linkcolor}
              activeStyle={LinkActiveStyle}
              to={"/About/"}
            >
              About
            </LinkStyled>
          </li>
          <li key="product">
            <LinkStyled
              linkcolor={headerColor.linkcolor}
              activeStyle={LinkActiveStyle}
              to={"/Product/"}
            >
              Product
            </LinkStyled>
          </li>
          <li key="news">
            <LinkStyled
              linkcolor={headerColor.linkcolor}
              activeStyle={LinkActiveStyle}
              to={"/News/"}
            >
              News
            </LinkStyled>
          </li>
          <li key="career">
            <LinkStyled
              linkcolor={headerColor.linkcolor}
              activeStyle={LinkActiveStyle}
              to={"/Career/"}
            >
              Career
            </LinkStyled>
          </li>
          <li key="contact">
            <LinkStyled
              linkcolor={headerColor.linkcolor}
              activeStyle={LinkActiveStyle}
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
