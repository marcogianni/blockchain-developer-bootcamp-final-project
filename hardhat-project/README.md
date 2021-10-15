# Hardhat Project


## USAGE
### ➡️ DEPLOY

Check `TOKEN_ADDRESS` (DAI Rinkeby) in the deploy script and then:
```
npx hardhat run scripts/deploy.js
```
By default script uses default hardhat network. To choose network run with:
```
npx hardhat run scripts/deploy.js --network rinkeby
```

### ↩️ UPGRADE
Remember to add the `PROXY_ADDRESS` and then:

```
npx hardhat run scripts/upgrade.js
```

State variable can't change, upgrade script allows only to update functions or add new state variables.
(If I had time before November 30, I would use this script to add the employee salary update functionality to the Salaries smart contract).



### 🔑 ENV

Create an `.env` file on root

```
// used by hardhat-gas-reporter
ETHERSCAN_API_KEY=""
COINMARKETCAP_API_KEY=""

PRIVATE_KEY=""
INFURA_API_KEY=""
LIQUIDY_PROVIDER_ADDRESS=""
PROXY_ADDRESS=""
```

---




## 📐 DESIGN PATTERNS

- Inheritance and Interfaces
  - IERC20 from `@openzeppelin/contracts/token/ERC20/IERC20.sol`
- Access Control Design Patterns
  - Ownable from `@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol`
- Upgradable Contracts
  - UUPS from `@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol`


## 🔒 Protect against attack vectors and Solidity Pitfalls

- Using Specific Compiler Pragma (0.8.4)
- Proper Use of Require, Assert and Revert 
- Use Modifiers Only for Validation 
- Checks-Effects-Interactions (Avoiding state changes after external calls)
- Re-entrancy
- Timestamp Dependence: I use block timestamps but the calculation interval is 30 days

## 🔐 Security

- SafeMath to avoid Integer Over/Underflow (SWC-101)
- Avoid txOrigin attack (SWC-115)
- Using new Solidity (SWC-102)



