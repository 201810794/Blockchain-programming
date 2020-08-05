var sender = eth.coinbase;
var receiver = eth.accounts[1];
eth.sendTransaction(
    {from:sender, to:receiver, value:web3.toWei(1.11,"ether")}
);
