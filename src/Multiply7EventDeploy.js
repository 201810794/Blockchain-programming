var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
//var _abiArray = JSON.parse(_abiStr);
var _abiArray=[{"constant":false,"inputs":[{"name":"input","type":"uint256"}],"name":"multiply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"Print","type":"event"}];
var _bin="0x"+"608060405234801561001057600080fd5b5061011a806100206000396000f3fe6080604052600436106039576000357c010000000000000000000000000000000000000000000000000000000090048063c6888fa114603e575b600080fd5b348015604957600080fd5b50607360048036036020811015605e57600080fd5b81019080803590602001909291905050506075565b005b7f91da4985ab616136202f4e81fd2d8cac1eb12591132d609cece407f7c6fb9205334260078402604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390a15056fea165627a7a723058208cc1a6558c44fd2cbada4e6b779166fd0393819034a6a06ba8b8e335960740930029";

async function deploy() {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying the contract from " + accounts[0]);
    var deployed = await new web3.eth.Contract(_abiArray)
        .deploy({data: _bin})
        .send({from: accounts[0], gas: 364124, gasPrice: '1000000000'}, function(err, transactionHash) {
                if(!err) console.log("hash: " + transactionHash); 
        })
        //.then(function(newContractInstance) {
        //    console.log(newContractInstance.options.address)
        //});
    console.log("---> The contract deployed to: " + deployed.options.address)
}
deploy()
