import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/moviesAPI';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesCardsList } from 'components/MoviesCardsList/MoviesCardsList';
import { Loader } from 'components/Loader/Loader';

export const MoviesPageView = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');

  useEffect(() => {
    const fetchMoviesOnSearch = async () => {
      setIsLoading(true);
      const arrayOfMovies = await getMovieByQuery(queryParam, page);
      const arrayOfMovieTitles = arrayOfMovies.results.map(
        ({ id, title, poster_path, vote_average, release_date }) => ({
          id,
          title,
          poster_path,
          vote_average,
          release_date,
        })
      );
      setMovies(arrayOfMovieTitles);
      setIsLoading(false);
    };

    if (queryParam) {
      fetchMoviesOnSearch();
    }
  }, [queryParam, page]);

  const showMoviesOnSearch = query => {
    setSearchParams({ query });
    setMovies([]);
    setPage(1);
  };

  return (
    <>
      <SearchForm showMovies={showMoviesOnSearch} />
      {isLoading && <Loader />}
      {movies && <MoviesCardsList movies={movies} />}
    </>
  );
};
