const axios = require('axios');
const { apiBasePath, apiModifier } = require('../config/config');

const formatCollectionData = (collectionData) => {
  return collectionData.map((collectionItem) => collectionItem.collection);
};

const nftTotalCount = async (address) => {
  return await axios(
    `${apiBasePath.elrondApi}${address}${apiModifier.NFTCount}`
  );
};

const collectionsQuery = async (address) => {
  const { data: size } = await nftTotalCount(address);
  const { data: nfts } = await axios(
    `${apiBasePath.elrondApi}${address}${apiModifier.NFTs}${size}`
  );
  return formatCollectionData(nfts);
};

module.exports = { collectionsQuery };
