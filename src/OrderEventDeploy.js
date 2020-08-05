var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var _abiArray  =[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_itemId","type":"bytes2"},{"name":"_quantity","type":"uint256"},{"name":"_dest","type":"string"}],"name":"order","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"itemId","type":"bytes2"},{"indexed":false,"name":"quantity","type":"uint256"},{"indexed":false,"name":"dest","type":"string"}],"name":"OrderLog","type":"event"}];
var _bin = "0x" + "608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610316806100606000396000f3fe608060405260043610610046576000357c01000000000000000000000000000000000000000000000000000000009004806312065fe01461004b5780637a59a92914610076575b600080fd5b34801561005757600080fd5b50610060610166565b6040518082815260200191505060405180910390f35b6101646004803603606081101561008c57600080fd5b8101908080357dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919080359060200190929190803590602001906401000000008111156100de57600080fd5b8201836020820111156100f057600080fd5b8035906020019184600183028401116401000000008311171561011257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506101e0565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101c357600080fd5b3073ffffffffffffffffffffffffffffffffffffffff1631905090565b3373ffffffffffffffffffffffffffffffffffffffff167f0cee52e22e6b387c4183ee502522fa33f030e118cc6065c7a842e8b7c00e4a6a84848460405180847dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156102a957808201518184015260208101905061028e565b50505050905090810190601f1680156102d65780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a250505056fea165627a7a72305820a32f94ff492f19a0fa633bef4435844a70236659de3f23df50381cf4885718070029";

async function deploy() {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying the contract from " + accounts[0]);
    var deployed = await new web3.eth.Contract(_abiArray)
        .deploy({data: _bin})
        .send({from: accounts[0], gas: 364124}, function(err, transactionHash) {
                if(!err) console.log("hash: " + transactionHash); 
        })
    console.log("---> The contract deployed to: " + deployed.options.address)
}
deploy()
