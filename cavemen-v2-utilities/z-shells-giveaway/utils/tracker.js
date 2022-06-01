const cavemenJSON = require('../data/legacy_cavemen.json');

const weeklyShellsWinners = (data, count, numberOfWinners) => {
  const myAddress =
    'erd12rajusd5amuea8pepulgdzxrzva2z0gtrswtmrn3cjagqn63hewsytxcy2';
  let allHolders = [];
  let winningAddresses = [];
  let winners = [];
  const payoutValues = {
    legendary: 500,
    epic: 250,
    rare: 100,
    uncommon: 50
  };

  data.forEach((ele) => {
    for (let i = 0; i < ele.cavemen.length; i++) {
      allHolders.push(ele.owner);
    }
  });

  do {
    let randomNumber = Math.floor(Math.random() * count);
    if (
      !winningAddresses.includes(allHolders[randomNumber]) &&
      !allHolders[randomNumber].startsWith('erd1qqqqqqq') &&
      allHolders[randomNumber] !== myAddress
    )
      winningAddresses.push(allHolders[randomNumber]);
  } while (winningAddresses.length < numberOfWinners);

  winningAddresses.forEach((address) => {
    data.forEach((ele) => {
      if (address === ele.owner) winners.push(ele);
    });
  });

  console.log(`Winning addresses: `);
  winners.forEach((winner) => {
    console.log(
      `${winner.owner} : ${winner.rarity} : ${payoutValues[winner.rarity]}`
    );
  });
};

// From list of holders after retreiving from localhost:
// 1st var: JSON object with all cavemen holders
// 2nd var: Number of Cavemen in that collection
// 3rd var: Number of winners
weeklyShellsWinners(cavemenJSON, 555, 10);
