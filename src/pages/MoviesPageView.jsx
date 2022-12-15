import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/moviesAPI';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesCardsList } from 'components/MoviesCardsList/MoviesCardsList';

export const MoviesPageView = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');

  useEffect(() => {
    const fetchMoviesOnSearch = async () => {
      const arrayOfMovies = await getMovieByQuery(queryParam, page);
      const arrayOfMovieTitles = arrayOfMovies.results.map(({ id, title }) => ({
        id,
        title,
      }));
      setMovies(arrayOfMovieTitles);
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
      {movies && <MoviesCardsList movies={movies} />}
    </>
  );
};
