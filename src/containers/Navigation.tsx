import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "gatsby-plugin-react-i18next";

import colors from "../layouts/colors";
import Typography from "../assets/Typography";

import { responsive, high_resolution } from "../layouts/responsive";

import HamburgerMenu from "../components/HamburgerMenu";

import ipf_red from "../assets/images/ipf_red.png";
import ipf_red_2x from "../assets/images/ipf_red@2x.png";
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

  background-image: ${(props: HeaderComponentProps) =>
    props.open ? `url(${ic_close})` : `url(${img_header_hamburger})`};

  background-size: 2.4rem 2.4rem;
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;

  filter: brightness(0)
    ${(props: HeaderComponentProps) => props.mode === "dark" && "invert(1)"};

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

const LinkStyled = styled(Link)`
  font-family: "Roboto", sans-serif;
  ${Typography("body", 1.6, 400)};
  transition: 0.1s linear;

  :hover {
    color: #ef5030;
  }

  :active {
    color: ${colors.primary};
    font-weight: 700;
  }
`;

function Navigation({ mode = "light" }: Props) {
  let color;

  if (mode === "dark") color = "white";

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const ref_headerComponent = useRef<HTMLElement>(null);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  // useEffect(() => {
  //   console.log("here");
  //   if (ref_headerComponent.current) {
  //     const scrollTop = ref_headerComponent?.current.scrollTop;

  //     console.log(scrollTop);

  //     if (scrollTop < 720) setColor("white");
  //     else setColor("black");
  //   }
  // }, [color]);

  return (
    <>
      <HamburgerMenu open={isOpened} lang={"locale"} onClick={handleClick} />
      <HeaderComponent open={isOpened} mode={mode} ref={ref_headerComponent}>
        <Link to={"/"}>
          <Logo />
        </Link>
        <HamburgerButton
          mode={mode}
          open={isOpened}
          onClick={handleClick}
        ></HamburgerButton>

        <NavItems>
          <li key="about">
            <LinkStyled
              // style={{
              //   color: color,
              // }}
              activeStyle={{ color: colors.primary }}
              to={"/About/"}
            >
              About
            </LinkStyled>
          </li>
          <li key="product">
            <LinkStyled
              // style={{ color }}
              activeStyle={{ color: colors.primary }}
              to={"/Product/"}
            >
              Product
            </LinkStyled>
          </li>
          <li key="news">
            <LinkStyled
              // style={{ color }}
              activeStyle={{ color: colors.primary }}
              to={"/News/"}
            >
              News
            </LinkStyled>
          </li>
          <li key="career">
            <LinkStyled
              // style={{ color }}
              activeStyle={{ color: colors.primary }}
              to={"/Career/"}
            >
              Career
            </LinkStyled>
          </li>
          <li key="contact">
            <LinkStyled
              // style={{ color }}
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
