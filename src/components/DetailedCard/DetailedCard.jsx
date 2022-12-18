import PropTypes from 'prop-types';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const DetailedCard = ({ movieData }) => {
  const date = () => new Date(movieData.release_date).getFullYear();

  const genres = movieData.genres
    ? movieData.genres.map(genre => genre.name).join(', ')
    : 'unknown';

  const getImgUrl = image => {
    if (image === null) {
      return 'https://img.icons8.com/pastel-glyph/512/film-reel--v2.png';
    }
    return `https://image.tmdb.org/t/p/w300${image}`;
  };

  const location = useLocation();

  return (
    <div>
      <h2>
        {movieData.title} ({date()})
      </h2>
      <img
        src={getImgUrl(movieData.poster_path)}
        alt={movieData.title}
        width={300}
      />
      <p>User score: {Math.round(movieData.vote_average * 10)}%</p>
      <p>Overview: {movieData.overview}</p>
      <p>Genres: {genres}</p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={'cast'} state={location.state}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={'reviews'} state={location.state}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

DetailedCard.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.object),
    release_date: PropTypes.string,
  }),
};