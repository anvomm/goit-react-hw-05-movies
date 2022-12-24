import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/moviesAPI';
import { ReviewList } from 'components/ReviewList/ReviewList';
import { Notification } from 'components/Review/Review.styled';
import { Loader } from 'components/Loader/Loader';

const ReviewsSubPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadReviews = async () => {
      setIsLoading(true);
      const data = await getMovieReviews(movieId);
      const arrayOfReviews = data.map(({ author, content, id }) => ({
        author,
        content,
        id,
      }));

      setReviews(arrayOfReviews);
      setIsLoading(false);
    };

    loadReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length === 0 && !isLoading ? (
        <Notification>
          We don't have any reviews for this movie yet :(
        </Notification>
      ) : (
        <ReviewList reviews={reviews} />
      )}
    </>
  );
};

export default ReviewsSubPage;
