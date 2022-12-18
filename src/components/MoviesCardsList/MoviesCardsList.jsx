import PropTypes from 'prop-types';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { MoviesList, Card } from './MoviesCardsList.styled';

export const MoviesCardsList = ({ movies }) => {
  return (
    <MoviesList>
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <Card key={id}>
          <MovieCard
            id={id}
            title={title}
            poster={poster_path}
            rating={vote_average}
          />
        </Card>
      ))}
    </MoviesList>
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
