const path = require('path');
const isLocal = typeof process.pkg === 'undefined';
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const fs = require('fs');
const dataDir = path.join(basePath, '/data');
// const jsonFile = require('./data/data.json');
const { collectionsQuery, walletCollectionCount } = require('./apis/elrond');
const organize = require('./utils/organize');
const scrapePrice = require('./utils/scrapers');

const ADDRESS =
  'erd1hzw5juzprkvjh6nk40408rplmh3p2ws04dsnh64kg3w6aqajvq3qv5etdt';
// const ADDRESS =
//   'erd12rajusd5amuea8pepulgdzxrzva2z0gtrswtmrn3cjagqn63hewsytxcy2';
// const ADDRESS =
//   'erd1maczpujskj9dr7f2swejul9w08q0sqdccaharahk0pe693r59ygs5dfmp6';

const getNFTValue = async () => {
  const finalObject = [];
  // Returns an array of all the collections held by the address
  const collections = await collectionsQuery(ADDRESS);

  // An object with the counts from each collection
  const collectionCounts = organize.createObject(collections);
  // console.log(collections);

  for (const [key, value] of Object.entries(collectionCounts)) {
    let floorPrice = await scrapePrice(`https://deadrare.io/collection/${key}`);
    finalObject.push({
      ticker: key,
      floorPrice,
      count: value
    });
    console.log(finalObject);
  }
  fs.writeFileSync(
    `${dataDir}/data.json`,
    JSON.stringify(finalObject, null, 2)
  );
};

getNFTValue();

// scrapePrice('https://deadrare.io/collection/GNOGONS-73222b');
