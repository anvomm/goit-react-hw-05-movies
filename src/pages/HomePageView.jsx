import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/moviesAPI';

export const HomePageView = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const doOneFetch = useRef(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const arrayOfMovies = await getTrendingMovies();
      const arrayOfMovieTitles = arrayOfMovies.map(({ id, title }) => ({
        id,
        title,
      }));
      return arrayOfMovieTitles;
    };

    if (doOneFetch.current === null) {
      fetchTrendingMovies().then(setTrendingMovies);
      doOneFetch.current = 1;
    }
  }, []);

  return (
    trendingMovies && (
      <>
        <h1>Trending Movies</h1>
        <ul>
          {trendingMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={id}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    )
  );
};
