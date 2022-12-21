import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import {
  Title,
  Image,
  Wrap,
  SmallWrap,
  Span,
  Text,
  AdditionalTitle,
  List,
  AdditionalLink,
  Div,
  Video,
} from './DetailedCard.styled';
import { Loader } from 'components/Loader/Loader';

export const DetailedCard = ({ movieData }) => {
  const date = () => new Date(movieData.release_date).getFullYear();

  const genres = movieData.genres
    ? movieData.genres.map(genre => genre.name).join(', ')
    : 'unknown';

  const getImgUrl = image => {
    if (image === null) {
      return 'https://img.icons8.com/pastel-glyph/512/film-reel--v2.png';
    }
    return `https://image.tmdb.org/t/p/w300${image}`;
  };

  const getVideo = () =>
    movieData.videos.results.find(video => video.type === 'Teaser')
      ? movieData.videos.results.find(video => video.type === 'Teaser').key
      : movieData.videos.results[0].key;

  const location = useLocation();

  return (
    <>
      {movieData.release_date && (
        <Title>
          {movieData.title} ({date()})
        </Title>
      )}
      <Wrap>
        <Image
          src={getImgUrl(movieData.poster_path)}
          alt={movieData.title}
          width={350}
        />
        <SmallWrap>
          {movieData.vote_average > 0 && (
            <Text>
              <Span>user score: </Span>
              {Math.round(movieData.vote_average * 10)}%
            </Text>
          )}
          {movieData.overview && (
            <Text>
              <Span>overview: </Span>
              {movieData.overview}
            </Text>
          )}
          {movieData.genres && movieData.genres.length !== 0 && (
            <Text>
              <Span>genres: </Span>
              {genres}
            </Text>
          )}
          {movieData.videos && movieData.videos.results.length !== 0 && (
            <Div>
              trailer:
              <Video
                src={`https://www.youtube.com/embed/${getVideo()}`}
                frameBorder="0"
                allowFullScreen
              ></Video>
            </Div>
          )}
        </SmallWrap>
      </Wrap>
      {movieData.title && (
        <div>
          <AdditionalTitle>Additional information</AdditionalTitle>
          <List>
            <li>
              <AdditionalLink to={'cast'} state={location.state}>
                Cast
              </AdditionalLink>
            </li>
            <li>
              <AdditionalLink to={'reviews'} state={location.state}>
                Reviews
              </AdditionalLink>
            </li>
          </List>
        </div>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

DetailedCard.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.object),
    release_date: PropTypes.string,
  }),
};
