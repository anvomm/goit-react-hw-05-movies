import { MobNav, List, NavLinkStyled, Wrap } from './MobileMenu.styled';
import { IconContext } from 'react-icons';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export const MobileMenu = ({ closeMenu }) => {
  return (
    <Wrap>
      <MobNav>
        <List>
          <li>
            <NavLinkStyled to="/" onClick={() => closeMenu()}>
              Home
              <IconContext.Provider value={{ size: 25, color: '#5CE4CF' }}>
                <HiOutlineArrowNarrowRight />
              </IconContext.Provider>
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/movies" onClick={() => closeMenu()}>
              Movies
              <IconContext.Provider value={{ size: 25, color: '#5CE4CF' }}>
                <HiOutlineArrowNarrowRight />
              </IconContext.Provider>
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/stars" onClick={() => closeMenu()}>
              Movie stars
              <IconContext.Provider value={{ size: 25, color: '#5CE4CF' }}>
                <HiOutlineArrowNarrowRight />
              </IconContext.Provider>
            </NavLinkStyled>
          </li>
        </List>
      </MobNav>
    </Wrap>
  );
};
