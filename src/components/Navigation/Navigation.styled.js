import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #232526;
  width: 1020px;
  height: 80px;
  padding: 0 70px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const NavWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 3px;
  font-family: 'Poppins';
  font-size: 26px;
  font-weight: 500;
  text-transform: lowercase;
  margin: 0 auto;
`;

export const NavLinks = styled(NavLink)`
  font-size: 18px;
  text-transform: lowercase;

  &.active {
    color: #99a9ff;
  }
`;
