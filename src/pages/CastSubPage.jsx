import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieActors } from 'services/moviesAPI';
import { ActorsList } from 'components/ActorsList/ActorsList';

export const CastSubPage = () => {
  const { movieId } = useParams();
  const doOneFetch = useRef(null);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const loadActors = async () => {
      const data = await getMovieActors(movieId);
      const arrayOfActors = data.map(
        ({ name, profile_path, character, id }) => ({
          name,
          id,
          profile_path,
          character,
        })
      );
      return arrayOfActors;
    };

    if (doOneFetch.current === null) {
      loadActors().then(setActors);
      doOneFetch.current = 1;
    }
  });

  return <ActorsList actors={actors} />;
};
