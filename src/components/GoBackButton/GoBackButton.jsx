import { useNavigate, useLocation } from 'react-router-dom';
import { BackButton } from './GoBackButton.styled';
import { IconContext } from 'react-icons';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export const GoBackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <BackButton
      type="button"
      onClick={() => {
        navigate(location?.state?.from ?? '/');
      }}
    >
      <IconContext.Provider value={{ size: 35, color: '#5CE4CF' }}>
        <HiOutlineArrowNarrowLeft />
      </IconContext.Provider>
      Go back
    </BackButton>
  );
};
