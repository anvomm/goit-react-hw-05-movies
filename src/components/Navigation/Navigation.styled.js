import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import '../../fonts/poppins-v20-latin-500.eot';
import '../../fonts/poppins-v20-latin-500.svg';
import '../../fonts/poppins-v20-latin-500.ttf';
import '../../fonts/poppins-v20-latin-500.woff';
import '../../fonts/poppins-v20-latin-500.woff2';

export const Nav = styled.nav`
  position: relative;
  height: 80px;
  padding: 0 20px;
  background-color: #232526;

  @media (min-width: 768px) {
    width: 650px;
    padding: 0 40px;
    margin: 0 auto;
  }

  @media (min-width: 1280px) {
    width: 1020px;
    padding: 0 70px;
  }
`;

export const NavList = styled.ul`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;

export const NavWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;

export const Logo = styled(Link)`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  display: flex;
  align-items: center;
  gap: 3px;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-transform: lowercase;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 23px;
  }

  @media (min-width: 1280px) {
    font-size: 26px;
  }
`;

export const NavLinks = styled(NavLink)`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    font-size: 18px;
    text-transform: lowercase;

    &.active {
      color: #99a9ff;
    }
  }
`;
export const MobileMenuButton = styled.button`
  cursor: pointer;
  background-color: inherit;
  @media (min-width: 1280px) {
    display: none;
  }
`;
