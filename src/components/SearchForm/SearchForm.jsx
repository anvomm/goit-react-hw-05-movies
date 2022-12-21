import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { IconContext } from 'react-icons';
import { BiSearchAlt } from 'react-icons/bi';
import { Input, Button, Form } from './SearchForm.styled';

export const SearchForm = ({ showMovies }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;

    if (query.trim() === '') {
      return notifyAboutWhitespace();
    }

    showMovies(e.target.elements.query.value);
    e.target.reset();
  };

  const notifyAboutWhitespace = () => {
    toast('Your search query should contain at least one letter!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Let's find something to watch"
        required
      />
      <Button>
        <IconContext.Provider
          value={{
            size: 30,
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
