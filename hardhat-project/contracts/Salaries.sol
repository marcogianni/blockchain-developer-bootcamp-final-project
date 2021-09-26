//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "hardhat/console.sol";

// Contracts
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// Libraries
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract Salaries is Ownable, ReentrancyGuard {
    using Address for address;
    using SafeMath for uint256;

    /*
     * Contains the monthly salary for each employee. If not present, the value will be zero.
     * An employee who receives a salary must be present in this mapping with a non-zero value.
     */
    mapping(address => uint256) public salaries;

    modifier receivesASalary(address _address) {
        require(salaries[_address] > 0, "Invalid address");
    }
}
