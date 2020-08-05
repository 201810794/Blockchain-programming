var Web3=require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
}
//solc 0.5.0
var _abiArray=[{"constant":false,"inputs":[],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timePassed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNowtime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var _bin="6080604052600060015534801561001557600080fd5b50610187806100256000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634f2be91f146100725780638ada066e14610089578063b4454253146100b4578063b49956e7146100df578063be9a65551461010a575b600080fd5b34801561007e57600080fd5b50610087610121565b005b34801561009557600080fd5b5061009e610135565b6040518082815260200191505060405180910390f35b3480156100c057600080fd5b506100c961013f565b6040518082815260200191505060405180910390f35b3480156100eb57600080fd5b506100f461014a565b6040518082815260200191505060405180910390f35b34801561011657600080fd5b5061011f610152565b005b600160008154809291906001019190505550565b6000600154905090565b600080544203905090565b600042905090565b426000819055505600a165627a7a72305820582d8fd60f3e77fad4568263228f3192d8602837e02f0bb4fe224aeeb2400d540029";
var _contract = new web3.eth.Contract(_abiArray);
_contract
    .deploy({data:"0x"+_bin})
    .send({from: "0x515991659AEbb7fA3c7001968F9629bd605971e2", gas: 364124, gasPrice: '1000000000'})
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
    });
