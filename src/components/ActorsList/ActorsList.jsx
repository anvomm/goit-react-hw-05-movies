import { ActorCard } from 'components/ActorCard/ActorCard';

export const ActorsList = ({ actors }) => {
  return (
    <ul>
      {actors.map(actor => {
        return (
          <li key={actor.id}>
            <ActorCard
              name={actor.name}
              picture={actor.profile_path}
              character={actor.character}
            />
          </li>
        );
      })}
    </ul>
  );
};
