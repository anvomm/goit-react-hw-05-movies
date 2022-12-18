import PropTypes from 'prop-types';
import { StarCard } from 'components/StarCard/StarCard';
import { List, Card } from 'components/MoviesCardsList/MoviesCardsList.styled';

export const StarsCardList = ({ stars }) => {
  return (
    <List>
      {stars.map(({ id, name, profile_path }) => {
        return (
          <Card key={id}>
            <StarCard name={name} image={profile_path} />
          </Card>
        );
      })}
    </List>
  );
};

StarsCardList.propTypes = {
  stars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};
