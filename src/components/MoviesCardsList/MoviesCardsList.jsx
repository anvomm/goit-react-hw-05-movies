import PropTypes from 'prop-types';
import { MovieCard } from 'components/MovieCard/MovieCard';

export const MoviesCardsList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster_path, release_date }) => (
        <li key={id}>
          <MovieCard
            id={id}
            title={title}
            poster={poster_path}
            date={release_date}
          />
        </li>
      ))}
    </ul>
  );
};

MoviesCardsList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster: PropTypes.string,
      date: PropTypes.string,
    })
  ),
};
