import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getOneMovieById } from 'services/moviesAPI';
import { DetailedCard } from 'components/DetailedCard/DetailedCard';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';

export const MovieDetailsPageView = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const doOneFetch = useRef(null);

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
      <GoBackButton />
      {movieData && <DetailedCard movieData={movieData} />}
    </>
  );
};
