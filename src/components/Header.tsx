import React from "react";
import styled from "styled-components";

import logo from "../images/logo.png";

const HeaderComponent = styled.header`
  width: 100%;
  height: 72px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 128px;
  height: 55px;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  height: 40px;
  margin: auto;
`;

const Link = styled.li`
  width: 75px;
  height: 40px;
`;

function Header() {
  return (
    <HeaderComponent>
      <Logo src={logo} />
      <Nav>
        <Link>
          <a href="#">About</a>
        </Link>
        <Link>
          <a href="#">Product</a>
        </Link>
        <Link>
          <a href="#">News</a>
        </Link>
        <Link>
          <a href="#">Career</a>
        </Link>
        <Link>
          <a href="#">Contact</a>
        </Link>
      </Nav>
    </HeaderComponent>
  );
}

export default Header;
