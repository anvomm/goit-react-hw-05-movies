import { useState, useEffect } from 'react';
import { getTrendingPersons } from 'services/moviesAPI';
import { Heading } from 'components/Heading/Heading';
import { StarsCardList } from 'components/StarsCardList/StarsCardList';
import { Loader } from 'components/Loader/Loader';

const StarsPage = () => {
  const [stars, setStars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

    fetchStars();
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
