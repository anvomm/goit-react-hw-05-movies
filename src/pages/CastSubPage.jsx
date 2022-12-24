import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieActors } from 'services/moviesAPI';
import { ActorsList } from 'components/ActorsList/ActorsList';
import { Notification } from 'components/Review/Review.styled';
import { Loader } from 'components/Loader/Loader';

const CastSubPage = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadActors = async () => {
      setIsLoading(true);
      const data = await getMovieActors(movieId);
      const arrayOfActors = data.map(
        ({ name, profile_path, character, id }) => ({
          name,
          id,
          profile_path,
          character,
        })
      );
      setActors(arrayOfActors);
      setIsLoading(false);
    };

    loadActors();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {actors.length === 0 && !isLoading ? (
        <Notification>Unfortunately no actors was found :(</Notification>
      ) : (
        <ActorsList actors={actors} />
      )}
    </>
  );
};

export default CastSubPage;
