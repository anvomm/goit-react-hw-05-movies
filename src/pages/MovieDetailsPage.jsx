import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneMovieById } from 'services/moviesAPI';
import { DetailedCard } from 'components/DetailedCard/DetailedCard';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { Loader } from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadMovieData = async () => {
      setIsLoading(true);
      const data = await getOneMovieById(movieId);
      setMovieData(data);
      setIsLoading(false);
    };

    loadMovieData();
  }, [movieId]);

  return (
    <>
      <GoBackButton />
      {isLoading && <Loader />}
      {movieData && <DetailedCard movieData={movieData} />}
    </>
  );
};

export default MovieDetailsPage;
