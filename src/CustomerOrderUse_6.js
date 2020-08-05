var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8345"));
var fs=require('fs');
var _str = fs.readFileSync("src/CustomerOrder.json");
var _json=JSON.parse(_str)
var _abiArray=JSON.parse(_json.contracts["src/CustomerOrder.sol:Order"].abi);

var order = new web3.eth.Contract(_abiArray, "0x4cf6715C1EA34283f3bea21E8cFe27ea0f7714D5");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    await order.methods.refundById(556).send({from:accounts[3],to:accounts[1],value:1116,gas:5000000});
    const balanceAcc2 = await web3.eth.getBalance(accounts[1]);
    console.log("Account2 balance: " + balanceAcc2);
}

doIt()
