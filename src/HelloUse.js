var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8345"));
var shelloContract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"}],
                                      "0xD2c12F66Ff9C11689fcbc09867E868C7b7775230");
shelloContract.methods.sayHello().call().then(function(str) {console.log(str);});
