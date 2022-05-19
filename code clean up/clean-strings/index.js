const path = require('path');
const isLocal = typeof process.pkg === 'undefined';
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const fs = require('fs');
const cavemen = require('./web-minted.json');
const cleanCavemen = require('./legacy-cavemen.json');
const sortedCavemen = require('./sorted-legacy-cavemen.json');

const newObjArr = [];

const cleanData = () => {
  cavemen.map((caveman) => {
    let newCaveman = {
      name: caveman.name,
      caveman: caveman.caveman,
      attributes: caveman.attributes.map((attribute) => {
        const value = Object.values(attribute)[0].toString();
        let obj = {};
        obj[Object.keys(attribute)] = value.split('(')[0].trim();
        return obj;
      })
    };
    newObjArr.push(newCaveman);

    writeFile('legacy-cavemen.json');
  });
};

const sortData = (file) => {
  file.sort((a, b) => {
    return (
      parseInt(a.attributes[1]['rarity-rank']) -
      parseInt(b.attributes[1]['rarity-rank'])
    );
  });
  writeFile(file, 'sorted-legacy-cavemen.json');
};

const fixRarity = () => {
  sortedCavemen.map((caveman, i) => {
    caveman.attributes[1] = { 'rarity-rank': i + 1 };
  });
  writeFile(sortedCavemen, 'final-legacy-cavemen.json');
};

const writeFile = (fileToWriteFrom, fileToWriteTo) => {
  fs.writeFileSync(
    `${basePath}/${fileToWriteTo}`,
    JSON.stringify(fileToWriteFrom),
    null,
    2
  );
};

// sortData(cleanCavemen);
fixRarity();
