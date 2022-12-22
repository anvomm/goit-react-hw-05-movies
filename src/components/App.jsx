import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { GlobalStyles } from 'utils/GlobalStyles';

export const App = () => {
  const HomePage = lazy(() =>
    import('pages/HomePage' /* webpackChunkName: "home-page" */)
  );
  const MoviesPage = lazy(() =>
    import('pages/MoviesPage' /* webpackChunkName: "movies-page" */)
  );
  const StarsPage = lazy(() =>
    import('pages/StarsPage' /* webpackChunkName: "stars-page" */)
  );
  const MovieDetailsPage = lazy(() =>
    import(
      'pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
    )
  );
  const CastSubPage = lazy(() =>
    import('pages/CastSubPage' /* webpackChunkName: "cast-subpage" */)
  );
  const ReviewsSubPage = lazy(() =>
    import('pages/ReviewsSubPage' /* webpackChunkName: "reviews-subpage" */)
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="stars" element={<StarsPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastSubPage />} />
            <Route path="reviews" element={<ReviewsSubPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
