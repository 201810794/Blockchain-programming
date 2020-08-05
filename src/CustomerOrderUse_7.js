var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var fs=require('fs');
var _str = fs.readFileSync("src/CustomerOrder.json");
var _json=JSON.parse(_str)
var _abiArray=JSON.parse(_json.contracts["src/CustomerOrder.sol:Order"].abi);

var order = new web3.eth.Contract(_abiArray, "0xED83FADa17a7E6820eD678aae13Ef8296Ceae41E");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    order.methods.getOrderByAddress(accounts[0]).call().then(function(value){console.log(value);});
    order.methods.getOrderByAddress(accounts[1]).call().then(function(value){console.log(value);});
    order.methods.getOrderByAddress(accounts[2]).call().then(function(value){console.log(value);});
}

doIt()
