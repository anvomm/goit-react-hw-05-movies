import { IconContext } from 'react-icons';
import { RiMovie2Fill } from 'react-icons/ri';
import { CgMenuGridR } from 'react-icons/cg';
import { useState } from 'react';
import {
  Nav,
  NavList,
  Logo,
  NavWrap,
  NavLinks,
  MobileMenuButton,
} from './Navigation.styled';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Nav>
      <NavWrap>
        <NavList>
          <li>
            <NavLinks to="/">Home</NavLinks>
          </li>
          <li>
            <NavLinks to="/movies">Movies</NavLinks>
          </li>
        </NavList>
        <Logo to="/">
          MyMovie
          <IconContext.Provider value={{ size: 30, color: '#99a9ff' }}>
            <RiMovie2Fill />
          </IconContext.Provider>
        </Logo>
        <NavLinks to="/stars">Movie stars</NavLinks>
        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <IconContext.Provider value={{ size: 30, color: '#99a9ff' }}>
            <CgMenuGridR />
          </IconContext.Provider>
        </MobileMenuButton>
      </NavWrap>
      {mobileMenuOpen && (
        <MobileMenu
          closeMenu={closeMenu}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      )}
    </Nav>
  );
};
