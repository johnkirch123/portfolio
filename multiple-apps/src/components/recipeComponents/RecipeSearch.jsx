import { useState } from 'react';

const RecipeSearch = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='recipe__search'>
      <label htmlFor='site-search'>Search Recipes:</label>
      <input
        type='search'
        id='site-search'
        name='q'
        onChange={handleChange}
        value={searchTerm}
      />

      <button
        className='button__white--outline'
        onClick={() => {
          handleSearch(searchTerm);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default RecipeSearch;
