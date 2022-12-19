import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/moviesAPI';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesCardsList } from 'components/MoviesCardsList/MoviesCardsList';
import { Loader } from 'components/Loader/Loader';
import { Pagination } from 'components/Pagination/Pagination.styled';
import { IconContext } from 'react-icons';
import { RxDoubleArrowLeft } from 'react-icons/rx';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledContainer } from 'components/DetailedCard/DetailedCard.styled';

export const MoviesPageView = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchMoviesOnSearch = async () => {
      setIsLoading(true);
      const arrayOfMovies = await getMovieByQuery(queryParam, page);
      const newPageCount = arrayOfMovies.total_pages;

      if (arrayOfMovies.results.length === 0) {
        setIsLoading(false);
        return notifyAboutWrongQuery();
      }

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
      setPageCount(newPageCount);
      setIsLoading(false);
    };

    if (queryParam) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      fetchMoviesOnSearch();
    }
  }, [queryParam, page]);

  const handlePageChange = event => {
    setPage(event.selected + 1);
  };

  const showMoviesOnSearch = query => {
    setSearchParams({ query });
    setMovies([]);
    setPage(1);
  };

  const notifyAboutWrongQuery = () => {
    toast('No pictures found, please try another search query!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <>
      <SearchForm showMovies={showMoviesOnSearch} />
      {isLoading && <Loader />}
      {movies && <MoviesCardsList movies={movies} />}
      {movies.length > 0 && (
        <Pagination
          previousLabel={
            <IconContext.Provider
              value={{
                size: 25,
              }}
            >
              <RxDoubleArrowLeft />
            </IconContext.Provider>
          }
          nextLabel={
            <IconContext.Provider
              value={{
                size: 25,
              }}
            >
              <RxDoubleArrowRight />
            </IconContext.Provider>
          }
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          disableInitialCallback={true}
          initialPage={0}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          forcePage={page - 1}
        />
      )}
      <StyledContainer />
    </>
  );
};
