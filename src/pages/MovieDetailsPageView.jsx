import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getOneMovieById } from 'services/moviesAPI';
import { DetailedCard } from 'components/DetailedCard/DetailedCard';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { Loader } from 'components/Loader/Loader';

export const MovieDetailsPageView = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const doOneFetch = useRef(null);

  useEffect(() => {
    const loadMovieData = async () => {
      setIsLoading(true);
      const data = await getOneMovieById(movieId);
      setMovieData(data);
      setIsLoading(false);
    };
    if (doOneFetch.current === null) {
      loadMovieData();
      doOneFetch.current = 1;
    }
  }, [movieId]);

  return (
    <>
      <GoBackButton />
      {isLoading && <Loader />}
      {movieData && <DetailedCard movieData={movieData} />}
    </>
  );
};
