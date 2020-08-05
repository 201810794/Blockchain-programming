var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
var _abiArray=[{"constant":false,"inputs":[{"name":"_user","type":"uint256"}],"name":"setB","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addrB","type":"address"}],"name":"setBInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"setA","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMatchResult","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"whatANum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBetMoney","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"play","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"distributeBetAmount","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"input","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
async function doIt() {
    var rsp = new web3.eth.Contract(_abiArray, '0x9c3174d6894d519871b10C6F9012213425E43042');
    const accounts = await web3.eth.getAccounts();
    await rsp.methods.deposit(1000).send({from:accounts[0],gas:1000000,value:1000});
    await rsp.methods.setBInfo(accounts[1]).send({from:accounts[0],gas:1000000});
    console.log("<BEFORE game>");
    rsp.methods.getBalance().call().then(function(value){console.log(value);});
    await rsp.methods.setA().send({from:accounts[0],gas:1000000});
    console.log("\n");
    console.log("What A choose: ");
    rsp.methods.whatANum().call().then(function(value){console.log(value);});
    await rsp.methods.setB(3).send({from:accounts[0],gas:1000000});
    await rsp.methods.play().send({from:accounts[0],gas:1000000});
    rsp.methods.getMatchResult().call().then(function(value){console.log(value);});
    await rsp.methods.distributeBetAmount().send({from:accounts[0],gas:1000000});
    console.log("\n");
    console.log("<AFTER game>");
    rsp.methods.getBalance().call().then(function(value){console.log(value);});
}
doIt()
