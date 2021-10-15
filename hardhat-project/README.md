# Hardhat Project


## USAGE

The project contains `.nvmrc` file with node version to use. Please run:
```
nvm use
```

Then run:
```
npm install
```

### 🧪 RUN TESTS
Should pass all 38 tests, run with:

```
npx hardhat test
```

---
### ➡️ DEPLOY

Check `TOKEN_ADDRESS` (DAI Rinkeby) in `/scripts/deploy.js` and then:
```
npx hardhat run scripts/deploy.js
```
**WARNING: You should set an address of an ERC20 Token with 18 decimals (default ERC20)**.
I used DAI in Rinkeby network, to get DAI use [Compound](https://app.compound.finance/). You can only request 100 DAI at a time.

In my tests I deployed a token called DAI, this allowed me to have a large availability of tokens to be sent to the liquidity provider address.


By default script uses default hardhat network. To choose network run with:
```
npx hardhat run scripts/deploy.js --network rinkeby
```
---
### ↩️ UPGRADE
Remember to add the `PROXY_ADDRESS` in `.env` and then:

```
npx hardhat run scripts/upgrade.js
```

State variable can't change, upgrade script allows only to update functions or add new state variables.
(If I had time before November 30, I would use this script to add the employee salary update functionality to the Salaries smart contract).


---
### 🔑 ENV

Create an `.env` file on project root. Here the path:
```
blockchain-developer-bootcamp-final-project/hardhat-project/.env
```

The env file shoud contain:
```
ETHERSCAN_API_KEY=""            # used by hardhat-gas-reporter
COINMARKETCAP_API_KEY=""        # used by hardhat-gas-reporter
# to ignore remove require("hardhat-gas-reporter") in hardhat.config.js, etherscan and gasReport from module.export

PRIVATE_KEY=""                  # used to deploy
INFURA_API_KEY=""               # used to deploy
LIQUIDY_PROVIDER_ADDRESS=""     # employees receive their salary thanks to this address
PROXY_ADDRESS=""                # Used by scripts/upgrade.js
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


## ⚓ NFT certification

Is it possible to have a version for LinkedIn too? Here my address.
```
0x2176f4b766CD63C4b59CfDeb7d8A599A7Ae5F569
```
