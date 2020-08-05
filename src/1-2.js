var bal1=eth.getBalance(eth.accounts[0]);
var bal2=eth.getBalance(eth.accounts[1]);

console.log('Accounts: ', eth.accounts);
console.log('Balance of account1: ', web3.fromWei(bal1,"ether"), 'ether');
console.log('Balance of account2: ', web3.fromWei(bal2,"ether"), 'ether');
console.log('Block number: ', eth.blockNumber);
