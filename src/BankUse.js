var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var _abiArray=[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"}],"name":"forwardTo","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"incrementAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var myBank = new web3.eth.Contract(_abiArray, '0xf2677471A8432F8332F5C259741e9E21Ce8989Bf');
myBank.methods.deposit(11111).send({from:"0x52cadd19f40f5f5f544f33fde2f8fc118862e4f9",gas:800000,value:11111});
myBank.methods.deposit(222).send({from:"0x52cadd19f40f5f5f544f33fde2f8fc118862e4f9",gas:800000,value:222});
//myBank.methods.getBalance().call().then(function(value){console.log(value);});
//myBank.methods.getBalance().call().then(console.log);
