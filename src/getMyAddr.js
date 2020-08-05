var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8345"))
var myAddr0;
web3.eth.getAccounts(console.log);
