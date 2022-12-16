import { Link, useLocation } from 'react-router-dom';

export const MovieCard = ({ id, title, poster, date }) => {
  const location = useLocation();

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
      <h2>
        {title} ({date.slice(0, 4)})
      </h2>
    </Link>
  );
};
