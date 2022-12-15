export const SearchForm = ({ showMovies }) => {
  const handleSubmit = e => {
    e.preventDefault();
    showMovies(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button>Search</button>
    </form>
  );
};
