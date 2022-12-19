import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieReviews } from 'services/moviesAPI';
import { ReviewList } from 'components/ReviewList/ReviewList';
import { Notification } from 'components/Review/Review.styled';

export const ReviewsSubPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const doOneFetch = useRef(null);

  useEffect(() => {
    const loadReviews = async () => {
      const data = await getMovieReviews(movieId);
      const arrayOfReviews = data.map(({ author, content, id }) => ({
        author,
        content,
        id,
      }));
      return arrayOfReviews;
    };

    if (doOneFetch.current === null) {
      loadReviews().then(setReviews);
      doOneFetch.current = 1;
    }
  }, [movieId]);

  return reviews.length > 0 ? (
    <ReviewList reviews={reviews} />
  ) : (
    <Notification>We don't have any reviews for this movie yet :(</Notification>
  );
};
