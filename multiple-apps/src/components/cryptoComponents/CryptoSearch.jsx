import { useState } from 'react';

const CryptoSearch = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='search'>
      <label htmlFor='site-search' className='search__title'>
        Search Crypto:
      </label>
      <input
        type='search'
        id='site-search'
        className='search__input'
        name='q'
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch(searchTerm);
        }}
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

export default CryptoSearch;
