import PropTypes from 'prop-types';
import { ActorCard } from 'components/ActorCard/ActorCard';
import { List, Card } from './ActorsList.styled';

export const ActorsList = ({ actors }) => {
  return (
    <List>
      {actors.map(actor => {
        return (
          <Card key={actor.id}>
            <ActorCard
              name={actor.name}
              picture={actor.profile_path}
              character={actor.character}
            />
          </Card>
        );
      })}
    </List>
  );
};

ActorsList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      picture: PropTypes.string,
      character: PropTypes.string,
    })
  ).isRequired,
};
