pragma solidity 0.4.25;
contract powerOf2 {
    uint256 output;
    function PowerOf2(uint input) public {
        output=1;
        for(uint256 i=0; i<input; i++){
            output = output*2;
        }
    }
    function getResult() public view returns (uint256) {
        return output;
    }
}
