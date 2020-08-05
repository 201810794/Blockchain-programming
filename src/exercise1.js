//geth --exec "loadScript('src/exercise1.js')" attach http://localhost:8445
var acc1 = eth.accounts[0];
var acc2 = eth.accounts[1];
var acc3 = eth.accounts[2];
var bal1 = eth.getBalance(acc1);
var bal2 = eth.getBalance(acc2);
var bal3 = eth.getBalance(acc3);
var trs1 = eth.getTransactionCount(acc1);
var trs2 = eth.getTransactionCount(acc2);
var trs3 = eth.getTransactionCount(acc3);
console.log('1.block number: ', eth.blockNumber);
console.log('2.', admin.nodeInfo.enode);
console.log('3.peer count: ', net.peerCount);
console.log('4.accounts list: ', eth.accounts);
console.log('5.accounts balance in ether: ', web3.fromWei(bal1, "ether"),web3.fromWei(bal2, "ether"),web3.fromWei(bal3, "ether"));
console.log('6-1.coinbase before change: ', eth.coinbase);
miner.setEtherbase(eth.accounts[1]);
console.log('6-2.coinbase after change: ', eth.coinbase);
console.log('7.accounts waiting transaction: ', trs1,trs2,trs3);
console.log('7-1.reason: Because the transaction has not yet occurred in each account.');
console.log('8.block number: ', eth.blockNumber);
console.log('8-1.reason: Block number is unchanged. Because this is private network, so peer does not exist.');