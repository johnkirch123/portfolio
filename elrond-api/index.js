const fs = require('fs');
const path = require('path');
const isLocal = typeof process.pkg === 'undefined';
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const dataDir = path.join(basePath, '/data');
const axios = require('axios');
const { baseUrl, legacyCollection } = require('./config/default.json');
const fullMetadata = require(`./data/full_metadata.json`);

const getCavemen = async (collection) => {
  const allCavemen = [];
  const maxQuerySize = 100;

  const { data: count } = await axios.get(
    `${baseUrl}/nfts/count?collection=${collection}`
  );

  for (let i = 0; i < count; i += maxQuerySize) {
    console.log(`numbers: ${i} and ${i + maxQuerySize}`);
    let allData = await axios.get(
      `${baseUrl}/nfts?from=${i}&size=${maxQuerySize}&withOwner=true&collection=${collection}`
    );
    console.log(`allData.data.length: ${allData.data.length}`);
    allData.data.forEach((caveman) => {
      allCavemen.push(caveman);
    });
  }
  saveCavemen(allCavemen, `${dataDir}/api_data.json`);
  const structuredObjectsArray = restructureData(allCavemen);
  saveCavemen(structuredObjectsArray, `${dataDir}/legacy_cavemen.json`);
};

const restructureData = (cavemanArray) => {
  const rarityCount = ['special', 'legendary', 'epic', 'rare', 'uncommon'];
  const structuredObjectsArray = [];
  const addressArray = [...new Set(cavemanArray.map((item) => item.owner))];

  addressArray.forEach((address) => {
    let cavemanObject = {
      owner: address,
      cavemen: [],
      identifiers: [],
      rarity: 'uncommon'
    };
    cavemanArray.forEach((caveman) => {
      if (!caveman.name.startsWith('Crypto')) return;
      if (address === caveman.owner) {
        cavemanObject.cavemen.push(caveman.name);
        cavemanObject.identifiers.push(caveman.identifier);
      }
    });
    structuredObjectsArray.push(cavemanObject);
  });

  structuredObjectsArray.forEach((ele) => {
    ele.cavemen.forEach((cman) => {
      fullMetadata.forEach((caveman) => {
        if (cman.split(' ')[2] == caveman.edition) {
          if (
            rarityCount.indexOf(caveman.attributes[0].value) <
            rarityCount.indexOf(ele.rarity)
          )
            ele.rarity = caveman.attributes[0].value;
        }
      });
    });
  });
  return structuredObjectsArray;
};

const saveCavemen = (array, dir) => {
  fs.writeFileSync(dir, JSON.stringify(array), null, 2);
};

getCavemen(legacyCollection);
