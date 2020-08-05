var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var _abiArray=[{"constant":true,"inputs":[{"name":"input","type":"uint256"}],"name":"multiply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"}];
var multiply = new web3.eth.Contract(_abiArray,"0x41Ae92d7414aBA85AF98E93c2B4cD77C99665001");
//multiply.methods.multiply().call().then(function(value) {console.log(value);});
multiply.methods.multiply(8).send({from:"0x52cadd19f40f5f5f544f33fde2f8fc118862e4f9",gas:100000})
multiply.methods.multiply(8).call().then(function(value) {console.log(value);});
