import PropTypes from 'prop-types';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { List, Card } from './MoviesCardsList.styled';

export const MoviesCardsList = ({ movies }) => {
  return (
    <List>
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
    </List>
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
