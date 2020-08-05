pragma solidity 0.5.1;
contract Multiply7Event {
    event Print(address from, uint256 timestamp, uint256 result);
    function multiply(uint256 input) public {
        emit Print(msg.sender, now, input*7);
    }
}
