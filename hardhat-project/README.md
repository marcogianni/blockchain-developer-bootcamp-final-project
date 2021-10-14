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

## 📖 NOTES

I used OpenZeppelin tooling to easily and securely deploy an upgradeable contract using the UUPS proxy pattern.

