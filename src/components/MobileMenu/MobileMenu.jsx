import { MobNav, List, NavLinkStyled, Wrap } from './MobileMenu.styled';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useLockBodyScroll } from '@fransvilhelm/hooks';

export const MobileMenu = ({ closeMenu }) => {
  useLockBodyScroll();

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

MobileMenu.propTypes = {
  closeMenu: PropTypes.func,
};
