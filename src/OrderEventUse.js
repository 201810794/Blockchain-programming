var Web3=require('web3');
var fs=require('fs');
var web3 = new Web3(new Web3.providers.WebsocketProvider("http://localhost:8345"));
var _abiArray=[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_itemId","type":"bytes2"},{"name":"_quantity","type":"uint256"},{"name":"_dest","type":"string"}],"name":"order","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"itemId","type":"bytes2"},{"indexed":false,"name":"quantity","type":"uint256"},{"indexed":false,"name":"dest","type":"string"}],"name":"OrderLog","type":"event"}];

async function doIt() {
    var _order = new web3.eth.Contract(_abiArray, '0xf95A0E974359A5711dcb5B12B0F809bCe9a614F7');
    var event = _order.events.OrderLog({fromBlock: 0}, function (error, result) {
        if (!error) {
            log = JSON.stringify(result.returnValues);
            console.log("Event fired: " + log);
            fs.appendFile("src/OrderEvent.txt", log, "utf-8", function(e) {
                if(!e) {
                    console.log(">> Writing to file");
                }
            });
        }
    });
    const accounts = await web3.eth.getAccounts();
    console.log("Account: " + accounts[0]);
    const balanceBefore = await web3.eth.getBalance(accounts[0]);
    console.log("Balance before: " + balanceBefore);
    value = await _order.methods.order("0x1111", 3, "20 2-gil Hongji-dong Jongro-gu Seoul").send({from: accounts[0], gas: 100000});
    console.log("---> order called " + JSON.stringify(value.events.OrderLog.returnValues));
    value = await _order.methods.order("0x1111", 5, "20 2-gil Hongji-dong Jongro-gu Seoul").send({from: accounts[0], gas: 100000});
    console.log("---> order called " + JSON.stringify(value.events.OrderLog.returnValues));
    value = await _order.methods.order("0x1111", 20, "20 2-gil Hongji-dong Jongro-gu Seoul").send({from: accounts[0], gas: 100000});
    console.log("---> order called " + JSON.stringify(value.events.OrderLog.returnValues));
    const balanceAfter = await web3.eth.getBalance(accounts[0]);
    console.log("Balance after: " + balanceAfter);
    console.log("Balance diff: " + (balanceBefore - balanceAfter));
}

doIt()
