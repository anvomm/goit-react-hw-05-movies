import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePageView } from 'pages/HomePageView';
import {
  getTrendingMovies,
  getMovieByQuery,
  getOneMovieById,
  getMovieActors,
  getMovieReviews,
} from 'services/moviesAPI';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePageView />} />
      </Route>
    </Routes>
  );
};
