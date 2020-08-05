var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8345"));
var shelloContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"}],
                                      "0x76081d5787f0b86205054db360ed0664950ae05a"
                                      );
shelloContract.methods.sayHello().call();
//shelloContract.methods.sayHello().call().then(function(str) {console.log(str);});
