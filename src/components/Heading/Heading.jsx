import PropTypes from 'prop-types';
import { Title } from './Heading.styled';

export const Heading = ({ text }) => <Title>{text}</Title>;

Heading.propTypes = {
  text: PropTypes.string,
};
