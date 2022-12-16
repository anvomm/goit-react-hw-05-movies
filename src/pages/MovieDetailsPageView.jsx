import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getOneMovieById } from 'services/moviesAPI';
import { DetailedCard } from 'components/DetailedCard/DetailedCard';

export const MovieDetailsPageView = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const doOneFetch = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovieData = async () => {
      const data = await getOneMovieById(movieId);
      return data;
    };
    if (doOneFetch.current === null) {
      loadMovieData().then(setMovieData);
      doOneFetch.current = 1;
    }
  }, [movieId]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
      </button>
      {movieData && <DetailedCard movieData={movieData} />}
    </>
  );
};
