import { Link, useLocation } from 'react-router-dom';

export const MovieCard = ({ id, title }) => {
  const location = useLocation();

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      {title}
    </Link>
  );
};
