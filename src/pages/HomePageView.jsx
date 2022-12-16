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
      const arrayOfMovieTitles = arrayOfMovies.map(
        ({ id, title, poster_path, vote_average, release_date }) => ({
          id,
          title,
          poster_path,
          vote_average,
          release_date,
        })
      );
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
        <Heading text={'Trending today'} />
        <MoviesCardsList movies={trendingMovies} />
      </>
    )
  );
};
