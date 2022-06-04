// export const priceElementClasses = {
//   deadRare: '.sc-kGXeez'
// };
const priceXPaths = {
  deadRare:
    '//*[@id="__next"]/div/div/div/div[1]/div[3]/div[1]/div/div/div[2]/div[1]/div/strong',
  trust: '//*[@id="price"]/div/span',
  frameIt:
    '//*[@id="content"]/div/app-auction-nft-collection/div[1]/div/div[3]/div[1]/mat-card/app-ui-collection-statistics/div/div[3]/div/span'
};

const apiBasePath = {
  elrondApi: 'https://api.elrond.com/accounts/'
};

const baseURL = {
  deadrareBaseUrl: 'https://deadrare.io/collection/',
  trustBaseUrl: 'https://www.trust.market/collection/',
  frameItBaseUrl: 'https://www.frameit.gg/marketplace/'
};

const apiModifier = {
  NFTCount: '/nfts/count',
  NFTs: '/nfts?size='
};

module.exports = { apiBasePath, apiModifier, priceXPaths, baseURL };
