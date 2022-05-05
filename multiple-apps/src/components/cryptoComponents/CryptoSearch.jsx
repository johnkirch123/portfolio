const CryptoSearch = ({ onHandleSearch }) => {
  return (
    <div className='crypto__search'>
      <div className='search'>
        <label htmlFor='site-search' className='search__title'>
          Search Top 100 Crypto:
        </label>
        <input
          type='search'
          id='site-search'
          className='search__input'
          name='crypto-q'
          onChange={(e) => onHandleSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CryptoSearch;
