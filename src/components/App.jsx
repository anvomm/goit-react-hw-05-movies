import {
  getTrendingMovies,
  getMovieByQuery,
  getOneMovieById,
  getMovieActors,
  getMovieReviews,
} from 'services/moviesAPI';

/* getMovieByQuery('cat');

getOneMovieById(991833); 
getMovieActors(991833);*/
getMovieReviews(991833);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
