import React, { useEffect, useState } from 'react';
import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import Loader from '../../components/Utility/Loader';
import Exchanges from '../../components/Utility/Exchanges';
import axios from 'axios';
import { tokenBaseURL } from '../../config/api';
import Collections from '../../components/CollectionComponent/Collections';
import Footer from '../../components/FooterComponent/Footer';
import TickerTape from '../../components/TickerComponent/TickerTape';
import MainArea from '../../components/MainComponent/MainArea';
import TwitterFeed from '../../components/TwitterComponent/TwitterFeed';

interface ITokens {
  balance: string;
  ticker: string;
}

interface INFT {
  identifier: string;
  collection: string;
  name: string;
  url: string;
}

const Dashboard: React.FC = () => {
  const { address } = useGetAccountInfo();
  const [tokenData, setTokenData] = useState<ITokens>();
  const [legacyData, setLegacyData] = useState<INFT[]>();
  const [sftData, setSftData] = useState<INFT[]>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const tokenURL = `${tokenBaseURL}/${address}/tokens?identifier=SHELLS-c48657`;
    axios.post('/api/users', { address });
    fetch(tokenURL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => setTokenData(data[0]));
  }, []);

  return (
    <div className='dashboard'>
      <TickerTape />
      <TwitterFeed />
      <MainArea />
      <Collections />
      <Footer />
    </div>
  );
};

export default Dashboard;
