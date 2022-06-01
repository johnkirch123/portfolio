const collections = require('../data/data.json');

const priceReveal = () => {
  let value = 0;

  collections.forEach((ele) => {
    value += ele.floorPrice * ele.count;
  });

  console.log(value);
};

priceReveal();
