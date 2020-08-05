var Web3=require('web3');
var my = require('./Math');  //cotaining abi,bin
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8446"));
//abi from Math.js
var _abiArray=JSON.parse(my._compiled.contracts['src/Math.sol:powerOf2'].abi);   //JSON parsing needed!!
var math = new web3.eth.Contract(_abiArray,"0x2D5184d273542aBE71bBcfdc2Eb54d27CC685c12");
//math.methods.PowerOf2(8).send({from:"0x52cadd19f40f5f5f544f33fde2f8fc118862e4f9", gas:100000});
math.methods.PowerOf2(32).send({from:"0x52cadd19f40f5f5f544f33fde2f8fc118862e4f9", gas:1000000});
math.methods.getResult().call().then(function(value) {console.log('result:',value);})
