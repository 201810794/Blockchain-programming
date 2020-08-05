var Web3=require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
}
var _abiArray=[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"}],"name":"forwardTo","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"incrementAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var _bin="608060405234801561001057600080fd5b503073ffffffffffffffffffffffffffffffffffffffff163160008190555061034e8061003e6000396000f3fe608060405260043610610072576000357c01000000000000000000000000000000000000000000000000000000009004806312065fe01461007757806313af4035146100a957806327d8ad88146100fa578063853828b61461013e578063a4a049dd14610155578063b6b55f2514610180575b600080fd5b34801561008357600080fd5b5061008c6101ae565b604051808381526020018281526020019250505060405180910390f35b3480156100b557600080fd5b506100f8600480360360208110156100cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101d4565b005b61013c6004803603602081101561011057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610218565b005b34801561014a57600080fd5b50610153610282565b005b34801561016157600080fd5b5061016a6102f8565b6040518082815260200191505060405180910390f35b6101ac6004803603602081101561019657600080fd5b8101908080359060200190929190505050610302565b005b6000803073ffffffffffffffffffffffffffffffffffffffff1631600054915091509091565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600061014d9050806001819055508060008082825403925050819055508173ffffffffffffffffffffffffffffffffffffffff166108fc61014d9081150290604051600060405180830381858888f1935050505015801561027d573d6000803e3d6000fd5b505050565b600054600181905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6000549081150290604051600060405180830381858888f193505050501580156102f5573d6000803e3d6000fd5b50565b6000600154905090565b803414151561031057600080fd5b8060008082825401925050819055505056fea165627a7a72305820f48b75e872290d78a83ecf58c4a25cd89c4f7701f1407ca94921924edb9acb0a0029";
var _contract = new web3.eth.Contract(_abiArray);
//unlock the account with a password provided
//web3.personal.unlockAccount(web3.eth.accounts[0],'password');
_contract
    .deploy({data:"0x"+_bin})
    .send({from: "0x52cadd19f40f5f5f544f33fde2f8fc118862e4f9", gas: 364124, gasPrice: '100000'})
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
    });
