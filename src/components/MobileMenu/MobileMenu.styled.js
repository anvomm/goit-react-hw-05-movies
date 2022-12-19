import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MobNav = styled.nav`
  height: 160px;
  width: 300px;
  padding-top: 20px;
  background-color: #1d1d1d;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: #1d1d1d;
  position: relative;
  z-index: 1000;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  font-size: 18px;
  text-transform: lowercase;

  &.active {
    color: #99a9ff;
  }
`;
