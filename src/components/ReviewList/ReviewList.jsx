import PropTypes from 'prop-types';
import { Review } from 'components/Review/Review';
import { List } from './ReviewList.styled';

export const ReviewList = ({ reviews }) => {
  return (
    <List>
      {reviews.map(({ id, author, content }) => (
        <Review key={id} author={author} content={content} />
      ))}
    </List>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
