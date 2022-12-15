import { useState, useEffect, useRef } from 'react';
import { getTrendingMovies } from 'services/moviesAPI';
import { Heading } from 'components/Heading/Heading';
import { MoviesCardsList } from 'components/MoviesCardsList/MoviesCardsList';

export const HomePageView = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const doOneFetch = useRef(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const arrayOfMovies = await getTrendingMovies();
      const arrayOfMovieTitles = arrayOfMovies.map(({ id, title }) => ({
        id,
        title,
      }));
      return arrayOfMovieTitles;
    };

    if (doOneFetch.current === null) {
      fetchTrendingMovies().then(setTrendingMovies);
      doOneFetch.current = 1;
    }
  }, []);

  return (
    trendingMovies && (
      <>
        <Heading text={'Trending movies'} />
        <MoviesCardsList movies={trendingMovies} />
      </>
    )
  );
};
