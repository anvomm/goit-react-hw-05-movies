import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MobNav = styled.nav`
  height: 160px;
  width: 300px;
  padding: 30px;
  background-color: #1d1d1d;

  @media (min-width: 768px) {
    padding-right: 80px;
  }
  @media (min-width: 840px) {
    padding-right: 30px;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;

export const Wrap = styled.div`
  position: fixed;
  z-index: 1000;
  top: 100px;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: #1d1d1d;

  @media (min-width: 840px) {
    width: 768px;
    right: calc((100vw - 768px) / 2);
  }
  @media (min-width: 1280px) {
    display: none;
  }
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
  color: #f4f4f4;

  &.active {
    color: #99a9ff;
  }
`;
