const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { time } = require("@openzeppelin/test-helpers");

const MONTH = 2592000;

const displayTime = (unixTime) => {
  var date = new Date(unixTime * 1000).toLocaleString("it-IT");
  return date;
};

describe("Salaries - TEST", () => {
  let Salaries, salaries, DAIToken, daiToken, owner;
  let daiTokenAddress, salariesAddress;
  const provider = ethers.getDefaultProvider();

  let initialTotalSupply;
  let currentBlock;

  beforeEach(async () => {
    DAIToken = await ethers.getContractFactory("ERC20");
    Salaries = await ethers.getContractFactory("Salaries");
    [
      owner, // 50 ether
      addr1, // 0
      addr2, // 0
      addr3, // 0
      addr4, // 0
      addr5, // 0
      addr5, // 0
      addr6, // 0
      addr7, // 0
      addr8, // 0
      addr9, // 0
      addr10, // 0
      addr11, // 0
      addr12, // 0
      addr13, // 0
      addr14, // 0
      addr15, // 0
      addr16, // 0
      addr17, // 0
      addr18, // 1000 ether
    ] = await ethers.getSigners();
  });

  describe("Current Block", () => {
    it("Should be 0", async () => {
      currentBlock = await time.latest();
      const currentBlockNumber = await time.latestBlock();

      console.debug(
        "\t\t\tCurrent Block Number",
        currentBlockNumber.toString()
      );
      console.debug("\t\t\tCurrent Block Timestamp", currentBlock.toString());
      console.debug(
        "\t\t\tCurrent Block Time",
        displayTime(Number(currentBlock.toString()))
      );
    });
  });

  describe("DAI Token Contract", () => {
    it("Should deploy", async () => {
      daiToken = await DAIToken.deploy();
      await daiToken.deployed();

      daiTokenAddress = daiToken.address;
      console.debug("\t\t\tDAI Token Contract Address:", daiTokenAddress);

      const balance = await provider.getBalance(owner.address);
      console.debug("\n\t\t\tOWNER", owner.address);
      console.debug("\t\t\tOWNER ETH Balance:", balance.toString());
    });

    it("Owner should own Total Supply", async () => {
      const ownerDAIBalance = await daiToken.balanceOf(owner.address);
      console.debug(
        "\t\t\tOWNER DAI Balance:",
        `${ownerDAIBalance.toString()}`
      );

      initialTotalSupply = await daiToken.totalSupply();
      console.debug(
        "\t\t\tInitial Total Supply:",
        `${initialTotalSupply.toString()}`
      );

      expect(ownerDAIBalance.toString()).to.equal(initialTotalSupply);
    });
  });
});
