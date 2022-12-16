import { Link, Outlet } from 'react-router-dom';

export const DetailedCard = ({ movieData }) => {
  const date = () => new Date(movieData.release_date).getFullYear();
  const genres = movieData.genres
    ? movieData.genres.map(genre => genre.name).join(', ')
    : 'unknown';

  return (
    <div>
      <h2>
        {movieData.title} ({date()})
      </h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
        alt={movieData.title}
      />
      <p>User score: {Math.round(movieData.vote_average * 10)}%</p>
      <p>Overview: {movieData.overview}</p>
      <p>Genres: {genres}</p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
