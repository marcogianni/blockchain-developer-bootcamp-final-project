require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-solhint");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-ethers");
// require('@openzeppelin/contracts');
require("@openzeppelin/hardhat-upgrades");
require("hardhat-gas-reporter");
require("hardhat-tracer");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  // Gas Reporter
  // etherscan: {
  //   apiKey: "",
  // },
  // gasReporter: {
  //   currency: "USD",
  //   coinmarketcap: "",
  // },

  // to deploy
  // networks: {
  //   rinkeby: {
  //     url: "", //Infura url with projectId
  //     accounts: [""], // add the account that will deploy the contract (private key)
  //   },
  // },
};
