import { IconContext } from 'react-icons';
import { RiMovie2Fill } from 'react-icons/ri';
import { Nav, NavList, Logo, NavWrap, NavLinks } from './Navigation.styled';

export const Navigation = () => {
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
      </NavWrap>
    </Nav>
  );
};
