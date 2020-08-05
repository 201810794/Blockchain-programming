pragma solidity 0.4.25;
contract TimerCounter {
    uint256 startTime;
    uint256 counter = 0;
    function start() public {
        startTime=now;
    }
    function add() public {
        counter++;
    }
    function timePassed() public view returns(uint256) {
        return now-startTime;
    }
    function getNowtime() view public returns(uint) {
        return now;
    }
    function getCounter() public view returns (uint256) {
        return counter;
    }
}
