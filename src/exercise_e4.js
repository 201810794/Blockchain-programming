var primary = eth.accounts[0];
var bal = eth.getBalance(primary);
console.log('coinbase: ', eth.coinbase);
console.log('balance: ', bal);
miner.start(1);admin.sleepBlocks(1);miner.stop();
console.log('balance: ', bal);