var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider('http://localhost:8445'));
web3.eth.getAccounts(console.log);
web3.eth.getCoinbase(console.log);
web3.eth.getBalance('0x52cadd19f40f5f5f544f33fde2f8fc118862e4f9').then(console.log)
