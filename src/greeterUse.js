var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var _abiArray=[{"constant":false,"inputs":[{"name":"_greeting","type":"bytes32"}],"name":"setGreeting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var greeter = new web3.eth.Contract(_abiArray,"0xdAF7138A2EC739012512e18286B44DA3820754F0");
greeter.methods.greet().call().then(function(value) {console.log(web3.utils.toAscii(value));});
greeter.methods.setGreeting(web3.utils.fromAscii("Hello World!")).send({from:"0x52cadd19f40f5f5f544f33fde2f8fc118862e4f9",gas:100000});
greeter.methods.greet().call().then(function(value) {console.log(web3.utils.toAscii(value));});
