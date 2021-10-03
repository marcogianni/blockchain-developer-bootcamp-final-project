//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "hardhat/console.sol";

// Contracts
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// Libraries
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";

// Interfaces
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Salaries is Ownable, ReentrancyGuard {
    using Address for address;
    using SafeMath for uint256;

    IERC20 public token; // the withdraw token ( I will use DAI )

    /*
     * Contains the monthly salary for each employee. If not present, the value will be zero.
     * An employee who receives a salary must be present in this mapping with a non-zero value.
     */
    mapping(address => uint256) public salaries;

    /*
     * This variable is used to track how much time has passed since the employee's last paycheck.
     * Each time the employee withdraws the entire sum, which can be for a month or cumulative for a period.
     * The employee can choose to withdraw every month, or whenever he wants as long as at least a month has passed.
     * A newly hired employee cannot withdraw his calculated sum, he has to wait for 30 days to pass.

     * The calculation of how much an employee can withdraw depends on the salary (greater than zero) and the last date saved in this mapping.
     */
    mapping(address => uint256) public startDates;
    mapping(address => uint256) public withdrawDates;
    mapping(address => uint256) public salaryChangeDate;
    uint16 public totalEmployees; // max 65535 employee

    // Check if an address is an employee (receiving a salary)
    modifier receivesASalary(address _address) {
        require(salaries[_address] > 0, "Invalid address");
        _;
    }

    /*
     * Only the owner can call this function.
     * The employee must already receive a salary.
     */
    function addEmployee(address _employee, uint256 _salary) public onlyOwner {
        require(salaries[_employee] == 0, "Already has a salary");
        salaries[_employee] = _salary;
        startDates[_employee] = _now();
        totalEmployees += 1;
    }

    /*
     * Only the owner can call this function.
     */
    function removeEmployee(address _employee) public onlyOwner {
        require(salaries[_employee] != 0, "Not an employee");
        salaries[_employee] = 0;
        startDates[_employee] = 0;
        totalEmployees -= 1;
    }

    /*
     * Only the owner can call this function.
     * The employee must already receive a salary.
     * WARNING: The employee must receive the sum correctly when the salary changes
     */
    function changeEmployeeSalary(address _employee, uint256 _salary)
        public
        onlyOwner
        receivesASalary(_employee)
    {
        salaries[_employee] = _salary;
        salaryChangeDate[_employee] = _now();

        // Should remove the employee if the last retirement date is within the 30-day range and then re-enter the employee with a new salary value.
        // or
        // use another variable to check the change date
    }

    function withdraw() public receivesASalary(msg.sender) {
        // require(_now().sub(withdrawDates[msg.sender]) < 30 days, "Too early"); // You cannot withdraw before 30 days
        // uint256 finalBalanceToWithdraw = calculateWithdrawal(msg.sender);
        // withdrawDates[msg.sender] = _now();
        // transferFrom liquidityProviderAdderess to sender // TODO INITIALIZE CONTRACT
        // require(token.transferFrom(liquidityProviderAddess(), _sender, finalBalanceToWithdraw), "Liquidity pool transfer failed");
    }

    // TODO fix range startDates withdrawDates
    function calculateWithdrawal(address _employee) public returns (uint256) {
        // If there is no start date, not an employee
        if (startDates[_employee] == 0) {
            return 0;
        }

        // Since hiring never withdrawn
        if (withdrawDates[_employee] == 0) {
            uint256 timePassed = _now().sub(startDates[_sender]);

            if (timePassed < 30 days) {
                return 0;
            }

            uint256 totalMonths = timePassed.div(30 days);
            return salaries[_employee].mul(totalMonths);
        }

        // Has withdrawn at least once
        if (withdrawDates[_employee] > startDates[_employee]) {
            uint256 timePassed = _now().sub(withdrawDates[_sender]);

            if (timePassed < 30 days) {
                return 0;
            }

            uint256 totalMonths = timePassed.div(30 days);
            return salaries[_employee].mul(totalMonths);
        }
    }

    /**
     * @dev Initializes the contract
     * @param _tokenAddress The address of the token contract.
     * @param _liquidityProviderAddress The address for the Liquidity Provider
     */
    function initializeContract(
        address _tokenAddress, // 0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea DAI Rinkeby
        address _liquidityProviderAddress
    ) external onlyOwner {
        require(_owner != address(0), "Zero address");
        require(_tokenAddress.isContract(), "Not a contract address");
        token = IERC20(_tokenAddress);
        setLiquidityProviderAddress(_liquidityProviderAddress);
        Ownable.transferOwnership(_owner);
    }

    /*
     * Returns current timestamp.
     */
    function _now() internal view returns (uint256) {
        // Note that the timestamp can have a 900-second error:
        // https://github.com/ethereum/wiki/blob/c02254611f218f43cbb07517ca8e5d00fd6d6d75/Block-Protocol-2.0.md
        return block.timestamp;
    }
}
