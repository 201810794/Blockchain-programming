var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var fs=require('fs');
var _str = fs.readFileSync("src/CustomerOrder.json");
var _json=JSON.parse(_str)
var _abiArray=JSON.parse(_json.contracts["src/CustomerOrder.sol:Order"].abi);

var order = new web3.eth.Contract(_abiArray, "0x4cf6715C1EA34283f3bea21E8cFe27ea0f7714D5");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    order.methods.getOrderById(556).call().then(function(value){console.log(value);});
}

doIt()
