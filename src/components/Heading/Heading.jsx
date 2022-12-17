import PropTypes from 'prop-types';

export const Heading = ({ text }) => <h1>{text}</h1>;

Heading.propTypes = {
  text: PropTypes.string,
};
