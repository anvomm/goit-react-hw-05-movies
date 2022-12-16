import { Review } from 'components/Review/Review';

export const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <Review key={id} author={author} content={content} />
      ))}
    </ul>
  );
};
