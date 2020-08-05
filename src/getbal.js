var Web3=require('web3');
var web3=new Web3('http://127.0.0.1:8345');
//web3.eth.getBalance('0xbabe53b69762cbc3f1820c154677e3f731588cc3');
web3.eth.getBalance('0xbabe53b69762cbc3f1820c154677e3f731588cc3').then(web3.utils.fromWei).then(console.log);
//console.log("Balance in ether: ",bal);
// 4월25일 20시기준 1eth->236000
//console.log("Korean currency: ", bal*2346000);
