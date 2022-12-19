import { useState, useEffect, useRef } from 'react';
import { getTrendingMovies } from 'services/moviesAPI';
import { Heading } from 'components/Heading/Heading';
import { MoviesCardsList } from 'components/MoviesCardsList/MoviesCardsList';
import { Loader } from 'components/Loader/Loader';

export const HomePageView = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const doOneFetch = useRef(null);

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

    if (doOneFetch.current === null) {
      fetchTrendingMovies();
      doOneFetch.current = 1;
    }
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
