import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePageView } from 'pages/HomePageView';
import { MoviesPageView } from 'pages/MoviesPageView';
import { MovieDetailsPageView } from 'pages/MovieDetailsPageView';
import { CastSubPage } from 'pages/CastSubPage';
import { ReviewsSubPage } from 'pages/ReviewsSubPage';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePageView />} />
        <Route path="movies" element={<MoviesPageView />} />
        <Route path="movies/:movieId" element={<MovieDetailsPageView />}>
          <Route path="cast" element={<CastSubPage />} />
          <Route path="reviews" element={<ReviewsSubPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
