import { MovieCard } from 'components/MovieCard/MovieCard';

export const MoviesCardsList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <MovieCard id={id} title={title} />
        </li>
      ))}
    </ul>
  );
};
