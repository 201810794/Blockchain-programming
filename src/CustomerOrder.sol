pragma solidity 0.5.1;
contract Customer {
    struct CustomerInfo {
        uint id;
        string name;
        string phoneNum;
        string destination;
        bool isCustomer; //false
    }
    mapping (address => CustomerInfo) customerMap;
    mapping (address => uint) mileage;
    function addCustomer(address addr, uint _id, string memory _name, string memory _phoneNum, string memory _dest) public {
        if (customerMap[addr].isCustomer == false) {
            CustomerInfo memory c = CustomerInfo(_id, _name, _phoneNum, _dest, true);
            customerMap[addr] = c;
        }
    }
    function getCustomerDestination(address addr) view public returns (string memory) {
        CustomerInfo memory c = customerMap[addr];
        return c.destination;
    }
    function setMileage(address addr, uint amount) public {
        mileage[addr] = amount / 100;
    }
}

contract Order {
    Customer customer;
    constructor() public { 
        customer = new Customer();
    }
    struct OrderInfo {
        uint oid;
        string oname;
        uint256 timestamp;
    }
    mapping (address => OrderInfo) orderMap;
    mapping (uint => address) addressById;
    mapping (address => string) orderStatus;
    mapping (address => uint) orderQuantity;
    mapping (address => uint) orderAmount;
    mapping (address => bool) isOrdered;
    uint accAmount;
    uint accOrderNum;
    function ordering(address payable addr, uint _oid, string memory _oname, uint _quantity, uint _amount) public payable {
        OrderInfo memory o = OrderInfo(_oid, _oname, now);
        orderMap[addr] = o;
        addressById[_oid] = addr;
        orderStatus[addr] = "Ordered";
        orderQuantity[addr] =_quantity;
        orderAmount[addr] = _amount;
        isOrdered[addr] = true;
        accAmount += _amount;
        accOrderNum ++;
        customer.setMileage(addr, _amount);
    }
    function addCustomer(address addr, uint _id, string memory _name, string memory _phoneNum, string memory _dest) public {
        customer.addCustomer(addr, _id, _name, _phoneNum, _dest);
    }
    function getCustomerDestination(address _addr) public view returns(string memory) {
        return customer.getCustomerDestination(_addr);
    }
    function getOrderByAddress(address _addr) view public returns (uint, string memory, string memory, string memory) {
        OrderInfo memory o = orderMap[_addr];
        return (o.oid, o.oname, orderStatus[_addr], customer.getCustomerDestination(_addr));
    }
    function getOrderById(uint _id) view public returns (uint, string memory, string memory, string memory) {
        OrderInfo memory order = orderMap[addressById[_id]];
        return (order.oid, order.oname, orderStatus[addressById[_id]], customer.getCustomerDestination(addressById[_id]));
    }
    function getInfo() public view returns(uint, uint, uint) {
        return (accOrderNum, accAmount, address(this).balance);
    }
    function refundById(uint _id) public payable{
        OrderInfo memory order = orderMap[addressById[_id]];
        require(_id == order.oid);
        accAmount -= orderAmount[addressById[_id]];
        orderStatus[addressById[_id]] = "Refunded";
        orderAmount[addressById[_id]] = 0;
        accOrderNum --;
    }
    function refundResult(uint _id) public view returns (uint, string memory, uint, string memory, string memory) {
        OrderInfo memory o = orderMap[addressById[_id]];
        return (o.oid, o.oname, orderAmount[addressById[_id]], orderStatus[addressById[_id]], customer.getCustomerDestination(addressById[_id]));
    }
}
