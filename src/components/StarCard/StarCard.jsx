import PropTypes from 'prop-types';
import {
  Image,
  CardTitle,
  CardBottom,
} from 'components/MovieCard/MovieCard.styled';

export const StarCard = ({ name, image }) => {
  const getImgUrl = image => {
    if (image === null) {
      return 'https://img.icons8.com/ios-filled/512/gender-neutral-user.png';
    }
    return `https://image.tmdb.org/t/p/w300${image}`;
  };

  return (
    <>
      <Image src={getImgUrl(image)} alt={name} width={285} height={428} />
      <CardBottom>
        <CardTitle>{name}</CardTitle>
      </CardBottom>
    </>
  );
};

StarCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};
