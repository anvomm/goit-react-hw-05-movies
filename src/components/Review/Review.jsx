import PropTypes from 'prop-types';
import { Span, Text } from 'components/DetailedCard/DetailedCard.styled';
import { Title } from './Review.styled';

export const Review = ({ author, content }) => {
  return (
    <>
      <Title>
        <Span>Author: </Span>
        {author}
      </Title>
      <Text>{content}</Text>
    </>
  );
};

Review.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
