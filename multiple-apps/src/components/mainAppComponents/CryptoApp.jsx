import { useEffect, useState } from 'react';
import CryptoList from '../cryptoComponents/CryptoList';
import CryptoSearch from '../cryptoComponents/CryptoSearch';

const CryptoApp = () => {
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className='crypto'>
      <div className='crypto__container'>
        <CryptoSearch />
        <CryptoList />
      </div>
    </div>
  );
};

export default CryptoApp;
