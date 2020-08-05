pragma solidity ^0.5.0;
contract MyBank {
    address payable owner;
    uint balance;
    constructor() public {
        owner = msg.sender;
        balance = address(this).balance;
    }
    function deposit(uint amount) public payable {
        require(msg.value == amount);
        balance += amount;
    }
    function withdraw(uint amount) public payable {
        balance -= amount;
        owner.transfer(amount);
    }
    function transferTo(address payable receiver, uint amount) public payable {
        balance -= amount;
        receiver.transfer(amount);
    }
    function getBalance() public view returns(uint) {
        return balance;
    }
    function getBalanceOfThis() public view returns(uint) {
        return address(this).balance;
    }
    function getBalanceOfOwner() public view returns(uint) {
        return owner.balance;
    }
}
