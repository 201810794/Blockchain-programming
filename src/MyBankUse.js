var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
var _abiArray=[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBalanceOfOwner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBalanceOfThis","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferTo","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}];
var myBank = new web3.eth.Contract(_abiArray, '0x07fd3596C5AbFED04585c7C8F68e48A695e4B9e9');
//myBank.methods.queryBalance().call().then(console.log);
myBank.methods.deposit(1111).send({from:"0x52cadd19f40f5f5f544f33fde2f8fc118862e4f9",gas:80000,value:1111});
//myBank.methods.queryBalance().call().then(console.log);
//myBank.methods.withdraw().send({from:"0x8c6E2fF5130d738a15dC060B08208469f968A5e8"});
//myBank.methods.queryBalance().call().then(console.log);
myBank.methods.getBalance().call().then(function(value) {console.log(value);});;