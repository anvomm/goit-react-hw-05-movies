export const ActorCard = ({ name, picture, character }) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w200${picture}`} alt={name} />
      <h3>{name}</h3>
      <p>{character}</p>
    </>
  );
};
