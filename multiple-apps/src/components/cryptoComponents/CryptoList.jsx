const CryptoList = ({ stats, filteredCrypto }) => {
  return (
    <div className='crypto__area'>
      <div className='crypto__market'>
        <h3 className='crypto__market-total-coins'>
          Total Coins: {stats?.totalCoins}
        </h3>
        <h3 className='crypto__market-total-markets'>
          Total Markets: {stats?.totalMarkets}
        </h3>
        <h3 className='crypto__market-total-exchanges'>
          Total Exchanges: {stats?.totalExchanges}
        </h3>
        <h3 className='crypto__market-total-market-cap'>
          Total Market Cap: {stats?.totalMarketCap}
        </h3>

        <h3 className='crypto__market-total-volume'>
          Total 24hr Volume: {stats?.total24hVolume}
        </h3>
      </div>
      {filteredCrypto?.map(
        ({
          coinrankingUrl,
          color,
          change,
          iconUrl,
          lowVolume,
          marketCap,
          name,
          price,
          rank
        }) => {
          return (
            <a
              key={rank}
              className='crypto__card'
              href={coinrankingUrl}
              target='_blank'
            >
              <h2 className='crypto__card--rank'>
                #{rank.toString().length === 1 ? `${rank}\xa0\xa0` : rank}
              </h2>
              <img src={iconUrl} alt={name} className='crypto__card--image' />
              <div className='crypto__card--data'>
                <h1 className='crypto__card--title'>{name}</h1>
                <h2 className='crypto__card--price'>
                  ${Number.parseFloat(price).toFixed(2)}
                </h2>
                <h2 className={change[0] === '-' ? 'red' : 'green'}>
                  {change}%
                </h2>
              </div>
              <div className='crypto__card--aux-data-box'>
                <h2 className='crypto__card--aux-data-market-cap'>
                  ${marketCap}
                </h2>
                <h2 className='crypto__card--aux-data-low-volume'>
                  {lowVolume ? 'Low Volume' : 'High Volume'}
                </h2>
              </div>
            </a>
          );
        }
      )}
    </div>
  );
};

export default CryptoList;
