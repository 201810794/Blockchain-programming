var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var abi =[{"constant":false,"inputs":[],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"subtract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
var addr = "0x7C0216650D69A1562A2b6418E7822E22510BB0a1";
var counter = new web3.eth.Contract(abi,addr);
//counter.methods.getCounter().call().then(function(str) {console.log(str);});
//counter.methods.add().send({from:"0x515991659AEbb7fA3c7001968F9629bd605971e2",gas:100000});
counter.methods.subtract().send({from:"0x515991659AEbb7fA3c7001968F9629bd605971e2",gas:100000});
counter.methods.getCounter().call().then(function(str) {console.log(str);});
