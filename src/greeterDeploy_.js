var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var greeterContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_greeting","type":"bytes32"}],"name":"setGreeting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var greeter = greeterContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405234801561001057600080fd5b507f48656c6c6f0000000000000000000000000000000000000000000000000000006000816000191690555060ef8061004a6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806350513b4f14604e578063cfae321714607c575b600080fd5b348015605957600080fd5b50607a600480360381019080803560001916906020019092919050505060ac565b005b348015608757600080fd5b50608e60ba565b60405180826000191660001916815260200191505060405180910390f35b806000816000191690555050565b600080549050905600a165627a7a723058209b6ab2e9e197f41875a981e07f91a37ad1850b97f21f66b6d1a8af30e5841b600029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
