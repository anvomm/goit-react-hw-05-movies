import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BiSearchAlt } from 'react-icons/bi';
import { Input, Button, Form } from './SearchForm.styled';

export const SearchForm = ({ showMovies }) => {
  const handleSubmit = e => {
    e.preventDefault();
    showMovies(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="query" autoComplete="off" required />
      <Button>
        <IconContext.Provider
          value={{
            size: 35,
            color: '#99a9ff',
          }}
        >
          <BiSearchAlt />
        </IconContext.Provider>
      </Button>
    </Form>
  );
};

SearchForm.propTypes = {
  showMovies: PropTypes.func,
};
