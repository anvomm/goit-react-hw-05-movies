import { Link } from 'react-router-dom';

export const MovieCard = ({ id, title }) => {
  return <Link to={`/movies/${id}`}>{title}</Link>;
};
