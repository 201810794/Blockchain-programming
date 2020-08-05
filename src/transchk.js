var Web3=require('web3');
var web3=new Web3('http://127.0.0.1:8345');
web3.eth.getBalance('0xbabe53b69762cbc3f1820c154677e3f731588cc3').then(console.log);
