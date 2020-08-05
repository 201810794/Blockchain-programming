var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var fs=require('fs');
var _str = fs.readFileSync("src/CustomerOrder.json");
var _json=JSON.parse(_str)
var _abiArray=JSON.parse(_json.contracts["src/CustomerOrder.sol:Order"].abi);

var order = new web3.eth.Contract(_abiArray, "0xb76CF829e5B276A0b3EB29494821792c50d8ad21");

async function doIt() {
    const accounts = await web3.eth.getAccounts();
    console.log("Account1: " + accounts[0]);
    const balanceAcc1 = await web3.eth.getBalance(accounts[0]);
    console.log("Account1 balance: " + balanceAcc1);
    console.log("Account2: " + accounts[1]);
    const balanceAcc2 = await web3.eth.getBalance(accounts[1]);
    console.log("Account2 balance: " + balanceAcc2);
    console.log("Account3: " + accounts[2]);
    const balanceAcc3 = await web3.eth.getBalance(accounts[2]);
    console.log("Account3 balance: " + balanceAcc3);
}

doIt()
