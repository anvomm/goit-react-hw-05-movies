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
  const {
    release_date,
    genres,
    videos,
    title,
    poster_path,
    vote_average,
    overview,
  } = movieData;

  const date = () => new Date(release_date).getFullYear();

  const genresNames = genres
    ? genres.map(genre => genre.name).join(', ')
    : 'unknown';

  const getImgUrl = image => {
    if (image === null) {
      return 'https://img.icons8.com/pastel-glyph/512/film-reel--v2.png';
    }
    return `https://image.tmdb.org/t/p/w300${image}`;
  };

  const getVideo = () => {
    const videosArr = videos.results;
    return videosArr.find(video => video.type === 'Trailer')
      ? videosArr.find(video => video.type === 'Trailer').key
      : videosArr[0].key;
  };

  const location = useLocation();

  return (
    <>
      {release_date && (
        <Title>
          {title} ({date()})
        </Title>
      )}
      <Wrap>
        {title && <Image src={getImgUrl(poster_path)} alt={title} />}
        <SmallWrap>
          {vote_average > 0 && (
            <Text>
              <Span>user score: </Span>
              {Math.round(vote_average * 10)}%
            </Text>
          )}
          {overview && (
            <Text>
              <Span>overview: </Span>
              {overview}
            </Text>
          )}
          {genres && genres.length !== 0 && (
            <Text>
              <Span>genres: </Span>
              {genresNames}
            </Text>
          )}
          {videos && videos.results.length !== 0 && (
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
      {title && (
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
