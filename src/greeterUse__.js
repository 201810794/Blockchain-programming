var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var _abiArray=[{"constant":false,"inputs":[{"name":"_greeting","type":"bytes32"}],"name":"setGreeting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var _contract = web3.eth.contract(_abiArray);
var greeter = _contract.at("0xc6a2b94a6ee537e2092ef46a69d2d26fcd33ecda");
console.log(greeter.greet.call());
console.log(greeter.setGreeting("Hello World").send({from:"0x0D633B7437C8FCe68A23dd73a7417F7Fb3352c45",gas:100000}));
//console.log(greeter.setGreeting({from:"0x0D633B7437C8FCe68A23dd73a7417F7Fb3352c45",gas:100000}));
console.log(greeter.greet.call());
