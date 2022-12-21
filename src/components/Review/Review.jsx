import PropTypes from 'prop-types';
import { Span } from 'components/DetailedCard/DetailedCard.styled';
import { Title, ReviewText } from './Review.styled';

export const Review = ({ author, content }) => {
  return (
    <>
      <Title>
        <Span>Author: </Span>
        {author}
      </Title>
      <ReviewText>{content}</ReviewText>
    </>
  );
};

Review.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
