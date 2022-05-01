import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <div className='search__box'>
      <input
        id='search-box'
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={onSearch}
        type='search'
        autoComplete='off'
        value={query.toUpperCase()}
        placeholder='Search...'
      />
    </div>
  );
};

export default SearchComponent;
