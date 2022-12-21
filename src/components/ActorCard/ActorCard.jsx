import PropTypes from 'prop-types';
import { CardTitle, Text, ActorCardBottom, Image } from './ActorCard.styled';

export const ActorCard = ({ name, picture, character }) => {
  const getImgUrl = image => {
    if (image === null) {
      return 'https://img.icons8.com/ios-filled/512/gender-neutral-user.png';
    }
    return `https://image.tmdb.org/t/p/w200${image}`;
  };
  return (
    <>
      <Image src={getImgUrl(picture)} alt={name} width="200" />
      <ActorCardBottom>
        <CardTitle>{name}</CardTitle>
        <Text>{character}</Text>
      </ActorCardBottom>
    </>
  );
};

ActorCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  character: PropTypes.string,
};
