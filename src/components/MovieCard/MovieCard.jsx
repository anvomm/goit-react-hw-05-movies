import { useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { HiStar } from 'react-icons/hi';
import PropTypes from 'prop-types';
import {
  Image,
  CardLink,
  CardBottom,
  CardTitle,
  Rating,
} from './MovieCard.styled';

export const MovieCard = ({ id, title, poster, rating }) => {
  const location = useLocation();

  const getImgUrl = image => {
    if (image === null) {
      return 'https://img.icons8.com/pastel-glyph/512/film-reel--v2.png';
    }
    return `https://image.tmdb.org/t/p/w300${image}`;
  };

  return (
    <CardLink to={`/movies/${id}`} state={{ from: location }}>
      <Image src={getImgUrl(poster)} alt={title} width={200} />
      <CardBottom>
        <CardTitle>{title}</CardTitle>
        <Rating>
          <IconContext.Provider
            value={{
              size: 25,
              color: Math.round(rating / 2) >= 1 ? '#FF971D' : 'grey',
            }}
          >
            <HiStar />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: 25,
              color: Math.round(rating / 2) >= 2 ? '#FF971D' : 'grey',
            }}
          >
            <HiStar />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: 25,
              color: Math.round(rating / 2) >= 3 ? '#FF971D' : 'grey',
            }}
          >
            <HiStar />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: 25,
              color: Math.round(rating / 2) >= 4 ? '#FF971D' : 'grey',
            }}
          >
            <HiStar />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: 25,
              color: Math.round(rating / 2) >= 5 ? '#FF971D' : 'grey',
            }}
          >
            <HiStar />
          </IconContext.Provider>
        </Rating>
      </CardBottom>
    </CardLink>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  rating: PropTypes.number,
};
