import PropTypes from 'prop-types';

export const StarCard = ({ name, image }) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w300${image}`} alt={name} />
      <h2>{name}</h2>
    </>
  );
};

StarCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};
