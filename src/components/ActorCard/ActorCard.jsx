import { useState } from 'react';

export const ActorCard = ({ name, picture, character }) => {
  const getImgUrl = image => {
    if (image === null) {
      return 'https://img.icons8.com/ios-filled/512/gender-neutral-user.png';
    }
    return `https://image.tmdb.org/t/p/w200${image}`;
  };
  return (
    <>
      <img src={getImgUrl(picture)} alt={name} width="200" />
      <h3>{name}</h3>
      <p>{character}</p>
    </>
  );
};
