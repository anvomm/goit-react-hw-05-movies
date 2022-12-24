import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/moviesAPI';
import { Heading } from 'components/Heading/Heading';
import { MoviesCardsList } from 'components/MoviesCardsList/MoviesCardsList';
import { Loader } from 'components/Loader/Loader';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setIsLoading(true);
      const arrayOfMovies = await getTrendingMovies();
      const arrayOfMovieTitles = arrayOfMovies.map(
        ({ id, title, poster_path, vote_average, release_date }) => ({
          id,
          title,
          poster_path,
          vote_average,
          release_date,
        })
      );
      setTrendingMovies(arrayOfMovieTitles);
      setIsLoading(false);
    };

    fetchTrendingMovies();
  }, []);

  return (
    trendingMovies && (
      <>
        <Heading text={'Trending today'} />
        {isLoading && <Loader />}
        <MoviesCardsList movies={trendingMovies} />
      </>
    )
  );
};

export default HomePage;
