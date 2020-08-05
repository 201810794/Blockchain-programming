pragma solidity 0.5.1;
contract OrderEvent {
    address private owner;
    constructor() public {
        owner = msg.sender;
    }
    event OrderLog(address indexed from, bytes2 itemId, uint quantity, string dest);
    function order(bytes2 _itemId, uint _quantity, string memory _dest) public payable {
        emit OrderLog(msg.sender, _itemId, _quantity, _dest);
    }
     modifier isOwner() {
        if(msg.sender != owner) {
            revert();
        }
        _;
    }
    function getBalance() view public isOwner returns(uint) {
        return address(this).balance;
    }
}
