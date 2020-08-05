var afterBal=eth.getBalance(eth.accounts[1]);
var afterBal_eth=web3.fromWei(afterBal,"ether");
var beforeBal_eth=268.33

console.log('Balance of receiver account: ', web3.fromWei(afterBal,"ether"), 'ether');
console.log('Receiver balance chage: ', (afterBal_eth-beforeBal_eth),'ether' );
console.log('Block number: ', eth.blockNumber);
