import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/moviesAPI';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesCardsList } from 'components/MoviesCardsList/MoviesCardsList';
import { Loader } from 'components/Loader/Loader';
import { Pagination } from 'components/Pagination/Pagination.styled';
import { IconContext } from 'react-icons';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { animateScroll as scroll } from 'react-scroll';
import { StyledContainer } from 'components/DetailedCard/DetailedCard.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');
  const pageParam = searchParams.get('page');

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchMoviesOnSearch = async () => {
      setIsLoading(true);
      const arrayOfMovies = await getMovieByQuery(queryParam, pageParam);
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
      scroll.scrollToTop();
    };

    if (queryParam) {
      fetchMoviesOnSearch();
    }
  }, [queryParam, pageParam]);

  const handlePageChange = event => {
    setSearchParams({ query: queryParam, page: event.selected + 1 });
  };

  const showMoviesOnSearch = query => {
    if (queryParam === query) {
      return setSearchParams({ query, page: 1 });
    }
    setSearchParams({ query, page: 1 });
    setMovies([]);
  };

  const notifyAboutWrongQuery = () => {
    toast('No movies found, please try another search query!', {
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
      {movies.length > 0 && pageCount > 1 && (
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
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          forcePage={pageParam - 1}
        />
      )}
      <StyledContainer />
    </>
  );
};

export default MoviesPage;
