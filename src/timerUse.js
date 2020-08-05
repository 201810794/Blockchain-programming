var Web3=require('web3');
var my = require('./Timer');  //cotaining abi,bin
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
//abi from Timer.js
var _abiArray=JSON.parse(my._compiled.contracts['src/Timer.sol:Timer'].abi);   //JSON parsing needed!!
console.log("- ABI: "+my._compiled.contracts['src/Timer.sol:Timer'].abi);
var timer = new web3.eth.Contract(_abiArray,"0xe87c50afEe199c44f3ea6370136a49C61c89F757");
timer.methods.getNow().call().then(function(value) {console.log(value);});
timer.methods.start().send({from:"0x52cadd19f40f5f5f544f33fde2f8fc118862e4f9",gas:100000});
timer.methods.timePassed().call().then(function(value) {console.log(value);});
