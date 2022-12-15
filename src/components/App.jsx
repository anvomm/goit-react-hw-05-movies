import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePageView } from 'pages/HomePageView';
import { MoviesPageView } from 'pages/MoviesPageView';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePageView />} />
        <Route path="movies" element={<MoviesPageView />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
