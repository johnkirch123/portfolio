const path = require('path');
const isLocal = typeof process.pkg === 'undefined';
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const fs = require('fs');
const dataDir = path.join(basePath, '/data');
// const jsonFile = require('./data/data.json');
const { collectionsQuery } = require('./apis/elrond');
const organize = require('./utils/organize');
const scrapePrice = require('./utils/scrapers');
const { priceXPaths, baseURL } = require('./config/config');

// test
const { performance } = require('perf_hooks');

const ADDRESS =
  // 'erd1hzw5juzprkvjh6nk40408rplmh3p2ws04dsnh64kg3w6aqajvq3qv5etdt';
  // 'erd12rajusd5amuea8pepulgdzxrzva2z0gtrswtmrn3cjagqn63hewsytxcy2';
  'erd1maczpujskj9dr7f2swejul9w08q0sqdccaharahk0pe693r59ygs5dfmp6';

const getNFTValue = async () => {
  const finalObject = [];
  // Returns an array of all the collections held by the address
  const collections = await collectionsQuery(ADDRESS);

  // An object with the counts from each collection
  const collectionCounts = organize.createObject(collections);
  const start = performance.now();
  for (const [key, value] of Object.entries(collectionCounts)) {
    let floorPrice = await scrapePrice(
      `${baseURL.deadrareBaseUrl}${key}`,
      priceXPaths.deadRare
    );
    // if (floorPrice === 0) {
    //   floorPrice = await scrapePrice(
    //     `${baseURL.trustBaseUrl}${key}`,
    //     priceXPaths.trust
    //   );
    // }
    // if (floorPrice === 0) {
    //   floorPrice = await scrapePrice(
    //     `${baseURL.frameItBaseUrl}${key}/sale`,
    //     priceXPaths.frameIt
    //   );
    // }
    finalObject.push({
      ticker: key,
      floorPrice,
      count: value
    });
    console.log(finalObject);
  }
  const duration = (performance.now() - start) / 1000;
  console.log(duration);
  fs.writeFileSync(
    `${dataDir}/data.json`,
    JSON.stringify(finalObject, null, 2)
  );
};

getNFTValue();
