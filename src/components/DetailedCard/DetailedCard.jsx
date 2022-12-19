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
} from './DetailedCard.styled';

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

  const location = useLocation();

  return (
    <>
      <Title>
        {movieData.title} ({date()})
      </Title>
      <Wrap>
        <Image
          src={getImgUrl(movieData.poster_path)}
          alt={movieData.title}
          width={350}
        />
        <SmallWrap>
          <Text>
            <Span>user score: </Span>
            {Math.round(movieData.vote_average * 10)}%
          </Text>
          <Text>
            <Span>overview: </Span>
            {movieData.overview}
          </Text>
          <Text>
            <Span>genres: </Span>
            {genres}
          </Text>
        </SmallWrap>
      </Wrap>
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
      <Outlet />
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
