import { useState, useEffect, useRef } from 'react';
import { getTrendingPersons } from 'services/moviesAPI';
import { Heading } from 'components/Heading/Heading';
import { StarsCardList } from 'components/StarsCardList/StarsCardList';
import { Loader } from 'components/Loader/Loader';

const StarsPage = () => {
  const [stars, setStars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const doOneFetch = useRef(null);

  useEffect(() => {
    const fetchStars = async () => {
      setIsLoading(true);
      const arrayOfStars = await getTrendingPersons();
      const filteredArray = arrayOfStars.map(({ id, name, profile_path }) => ({
        id,
        name,
        profile_path,
      }));
      setStars(filteredArray);
      setIsLoading(false);
    };

    if (doOneFetch.current === null) {
      fetchStars();
      doOneFetch.current = 1;
    }
  }, []);
  return (
    <>
      <Heading text={'TOP-20 movie stars of the week'} />
      {isLoading && <Loader />}
      <StarsCardList stars={stars} />
    </>
  );
};

export default StarsPage;
