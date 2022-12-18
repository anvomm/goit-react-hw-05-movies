import { useState, useEffect, useRef } from 'react';
import { getTrendingPersons } from 'services/moviesAPI';
import { Heading } from 'components/Heading/Heading';
import { StarsCardList } from 'components/StarsCardList/StarsCardList';

export const StarsPageView = () => {
  const [stars, setStars] = useState([]);
  const doOneFetch = useRef(null);

  useEffect(() => {
    const fetchStars = async () => {
      const arrayOfStars = await getTrendingPersons();
      const filteredArray = arrayOfStars.map(({ id, name, profile_path }) => ({
        id,
        name,
        profile_path,
      }));
      return filteredArray;
    };

    if (doOneFetch.current === null) {
      fetchStars().then(setStars);
      doOneFetch.current = 1;
    }
  }, []);
  return (
    <>
      <Heading text={'Movie stars of the week'} />
      <StarsCardList stars={stars} />
    </>
  );
};
