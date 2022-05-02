import {
  ApiNetworkProvider,
  ProxyNetworkProvider
} from '@elrondnetwork/erdjs-network-providers';
import { Address, Account, TokenPayment } from '@elrondnetwork/erdjs';

let networkProvider = new ApiNetworkProvider('https://devnet-api.elrond.com');

// let networkProvider = new ProxyNetworkProvider(
//   'https://devnet-gateway.elrond.com'
// );

let addressOfJohn = new Address(
  'erd1maczpujskj9dr7f2swejul9w08q0sqdccaharahk0pe693r59ygs5dfmp6'
);
let john = new Account(addressOfJohn);
let johnOnNetwork = await networkProvider.getAccount(addressOfJohn);
john.update(johnOnNetwork);

john.incrementNonce();

// console.log(john);
// let networkConfig = await networkProvider.getNetworkConfig();
// console.log(networkConfig.MinGasPrice);
// console.log(networkConfig.ChainID);

// let firstPayment = TokenPayment.egldFromAmount('0.1');
// let secondPayment = TokenPayment.egldFromBigInteger('100000000000000000');
// console.log(firstPayment.valueOf(), secondPayment.valueOf());
// console.log(firstPayment.toPrettyString(), secondPayment.toPrettyString());

// MAKING A PAYMENT WITH SHELLS
// let identifier = 'SHELLS-c48657';
// let numDecimals = 2;
// let firstPayment = TokenPayment.fungibleFromAmount(
//   identifier,
//   '1.5',
//   numDecimals
// );
// let secondPayment = TokenPayment.fungibleFromBigInteger(
//   identifier,
//   '4000',
//   numDecimals
// );

// console.log(firstPayment.toString()); // Will output: 150.
// console.log(firstPayment.toPrettyString()); // Will output: 1.50 FOO-123456.
// console.log(secondPayment.toString()); // Will output: 4000.
// console.log(secondPayment.toPrettyString()); // Will output: 40.00 FOO-123456.

let tx = new Transaction({
  data: new TransactionPayload('helloWorld'),
  gasLimit: 70000,
  receiver: addressOfJohn,
  value: TokenPayment.egldFromAmount(1),
  chainID: 'D'
});

let txHash = await networkProvider.send(tx);

// let data = tx.toSendable();
// let url = "https://devnet-api.elrond.com/transactions";
// let response = await axios.post(url, data, {
//     headers: {
//         "Content-Type": "application/json",
//     },
// });
// let txHash = response.data.txHash;
