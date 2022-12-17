import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieCard = ({ id, title, poster, date }) => {
  const location = useLocation();

  const getImgUrl = image => {
    if (image === null) {
      return 'https://img.icons8.com/pastel-glyph/512/film-reel--v2.png';
    }
    return `https://image.tmdb.org/t/p/w300${image}`;
  };

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <img src={getImgUrl(poster)} alt={title} width={300} />
      <h2>
        {title} ({date.slice(0, 4)})
      </h2>
    </Link>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  date: PropTypes.string,
};
