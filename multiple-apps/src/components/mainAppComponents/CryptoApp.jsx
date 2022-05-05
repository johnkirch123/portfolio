import { useEffect, useState } from 'react';
import CryptoList from '../cryptoComponents/CryptoList';
import CryptoSearch from '../cryptoComponents/CryptoSearch';
import { getCrypto } from '../../config/crypto';

const CryptoApp = () => {
  const [crypto, setCrypto] = useState(null);
  const [filteredCrypto, setFilteredCrypto] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const gettingCrypto = async () => {
      const cryp = await getCrypto();
      setCrypto(cryp.data.coins);
      setFilteredCrypto(cryp.data.coins);
      setStats(cryp.data.stats);
    };

    gettingCrypto();
  }, []);

  const onHandleSearch = (searchTerm) => {
    if (searchTerm === '') setFilteredCrypto(crypto);
    setFilteredCrypto(
      crypto.filter((coin) => coin.name.toLowerCase().includes(searchTerm))
    );
  };

  return (
    <div className='crypto'>
      <div className='crypto__container'>
        {crypto && crypto.coins}
        <CryptoSearch onHandleSearch={onHandleSearch} />
        <CryptoList
          stats={stats}
          crypto={crypto}
          filteredCrypto={filteredCrypto}
        />
      </div>
    </div>
  );
};

export default CryptoApp;
