pragma solidity 0.5.1;
contract BankTransfer {
    uint balance;
    uint increment;
    address payable secondAdd;
    uint prevBal;
    constructor() public {
        balance = address(this).balance;
    }
    function set2ndAdd(address payable add) public {
        secondAdd = add;
    }
    function deposit(uint amount) public payable {
        require(msg.value == amount);
        //increment = amount;
        balance += amount;
    }
    function withdrawAll() public {
        increment = balance;
        balance -= balance;
    }
    function getBalance() public view returns(uint, uint) {
        return(address(this).balance, balance);
    }
    function forwardTo(address payable _receiver) public payable {
        secondAdd = _receiver;
        prevBal = secondAdd.balance;
    }
    function withdraw(uint amount) public payable {
        balance -= amount;
        increment = amount;
    }
    function incrementAmount() public view returns(uint) {
        return increment;
    }
}
