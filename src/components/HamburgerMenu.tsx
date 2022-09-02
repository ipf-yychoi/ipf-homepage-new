import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-react-i18next';

import colors from '../layouts/colors';
import Typography from '../layouts/Typography';

import Container from './Container';
import LanguageSwitch from './LanguageSwitch';

type HamburgerMenuProps = {
  open: boolean;
  onClick: () => void;
};

type HeaderComponentProps = {
  open: boolean;
};

const HeaderComponent = styled(Container)`
  height: calc(100vh - 7.2rem);
  background: white;
  transform: ${({ open }: HeaderComponentProps) =>
    open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;

  padding: 4.4rem 2rem 4rem;

  position: fixed;
  overflow-y: auto;
  top: 7.2rem;
  left: 0;
  z-index: 99;
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: column;

  ${Typography('body', 3.2, 700)}
`;

const Gap = styled.li`
  margin-bottom: 3.2rem;
`;

const LinkStyled = styled(Link)`
  color: ${colors.black};
  transition: all 0.1s linear;

  :hover {
    color: #ef5030;
  }

  :active {
    color: ${colors.primary};
  }
`;

export default function HamburgerMenu({ open, onClick }: HamburgerMenuProps) {
  return (
    <HeaderComponent open={open}>
      <NavItems>
        <Gap>
          <LinkStyled activeStyle={{ color: colors.primary }} to="/about/">
            About
          </LinkStyled>
        </Gap>
        <Gap>
          <LinkStyled activeStyle={{ color: colors.primary }} to="/product/">
            Product
          </LinkStyled>
        </Gap>
        <Gap>
          <LinkStyled activeStyle={{ color: colors.primary }} to="/news/">
            News
          </LinkStyled>
        </Gap>
        <Gap>
          <LinkStyled activeStyle={{ color: colors.primary }} to="/career/">
            Careers
          </LinkStyled>
        </Gap>
        <Gap>
          <LinkStyled activeStyle={{ color: colors.primary }} to="/contact/">
            Contact
          </LinkStyled>
        </Gap>
      </NavItems>
      <LanguageSwitch backgroundColor="white" />
    </HeaderComponent>
  );
}
