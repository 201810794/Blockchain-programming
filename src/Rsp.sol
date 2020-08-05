pragma solidity 0.5.1;
contract Rsp {
    // 1: rock, 2: scissors, 3: paper
    uint computer;
    uint user;
    string result;
    uint resultNum;
    uint betMoney;
    uint amount = 1000 wei;
    address owner;
    address accountB;
    mapping (address => uint) balanceOf;
    constructor() public {
        owner = msg.sender;
    }
    function deposit(uint input) payable public onlyOwner {
        require(msg.value == input);
        balanceOf[msg.sender] += input;
    }
    function setA() public {
        uint nonce=0;
        computer = uint(uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty)))%3);
        computer += 1;
        nonce++;
        require(balanceOf[msg.sender] >= amount);
        balanceOf[msg.sender] -= amount;
        betMoney += amount;
    }
    function whatANum() public view returns(uint) {
        return computer;
    }
    function setBInfo(address addrB) public {
        accountB = addrB;
        balanceOf[accountB] = accountB.balance;
    }
    function setB(uint _user) public {
        user = _user;
        //balanceOf[accountB] = accountB.balance;
        balanceOf[accountB] -= amount;
        betMoney += amount;
    }
    function getBetMoney() public view returns(uint) {
        return betMoney;
    }
    function play() public {
        if (computer == user) {
            result = "tie";
        }
        else if ((computer == 1 && user == 2) || (computer == 2 && user == 3) || (computer == 3 && user == 1)) {
            result = "A wins";
            resultNum = 1;
        }
        else if ((computer == 1 && user == 3) || (computer == 2 && user == 1) || (computer == 3 && user == 2)) {
            result = "B wins";
            resultNum = 2;
        }
    }
    function getMatchResult() public view returns(string memory) {
        return result;
    }
    function distributeBetAmount() public payable {
        if (resultNum == 1) // A(computer) wins
        {
            balanceOf[msg.sender] += betMoney;
            betMoney -= betMoney;
        }
        else if (resultNum == 2) // B(user) wins
        {
            balanceOf[accountB] += betMoney;
            betMoney -= betMoney;
        }
    }
    function getBalance() public view returns (uint, uint, uint) {
        return (balanceOf[msg.sender], balanceOf[accountB], address(this).balance);
    }
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
}
