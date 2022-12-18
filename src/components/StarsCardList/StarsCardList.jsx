import PropTypes from 'prop-types';
import { StarCard } from 'components/StarCard/StarCard';

export const StarsCardList = ({ stars }) => {
  return (
    <ul>
      {stars.map(({ id, name, profile_path }) => {
        return (
          <li key={id}>
            <StarCard name={name} image={profile_path} />
          </li>
        );
      })}
    </ul>
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
