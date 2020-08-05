pragma solidity 0.5.1;
contract BankV3 {
    address owner;
    uint balance;
    uint256 timeToDeposit;
    
    event PrintLog(string);
    event Send(address from, address to, uint amount);
    constructor() public {
        owner = msg.sender;
        balance = 0;
    }
    function() external {
        emit PrintLog("Fallback called");
    }
    function forwardTo(address payable _receiver) public payable onlyOwner {
        _receiver.transfer(msg.value);
        emit Send(msg.sender, _receiver, msg.value);
    }
    function getBalance() public view returns(uint, uint) {
        return (balance, address(this).balance);
    }
    function deposit(uint amount) public payable onlyAfter {
        timeToDeposit = now + 10 seconds;
        require(msg.value == amount);
        balance += amount;
    }
    function withdrawAll() public onlyOwner minBalance {
        balance -= address(this).balance;
        msg.sender.transfer(address(this).balance);
    }
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    modifier onlyAfter {
        require(now >= timeToDeposit);
        _;
    }
    modifier minBalance {
        require(address(this).balance > 101 wei);
        _;
    }
}
