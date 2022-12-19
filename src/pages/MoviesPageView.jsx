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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
