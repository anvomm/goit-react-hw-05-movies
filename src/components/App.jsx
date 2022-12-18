import { Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { HomePageView } from 'pages/HomePageView';
import { MoviesPageView } from 'pages/MoviesPageView';
import { StarsPageView } from 'pages/StarsPageView';
import { MovieDetailsPageView } from 'pages/MovieDetailsPageView';
import { CastSubPage } from 'pages/CastSubPage';
import { ReviewsSubPage } from 'pages/ReviewsSubPage';
import { GlobalStyles } from 'utils/GlobalStyles';

export const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Rubik', 'Poppins'],
      },
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageView />} />
          <Route path="movies" element={<MoviesPageView />} />
          <Route path="stars" element={<StarsPageView />} />
          <Route path="movies/:movieId" element={<MovieDetailsPageView />}>
            <Route path="cast" element={<CastSubPage />} />
            <Route path="reviews" element={<ReviewsSubPage />} />
          </Route>
          <Route path="*" element={<HomePageView />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
