import PropTypes from 'prop-types';

export const Review = ({ author, content }) => {
  return (
    <>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </>
  );
};

Review.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
