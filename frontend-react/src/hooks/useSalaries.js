import { useEffect } from "react";
import * as R from "ramda";
import { useContract } from "./useContract";
import { address as ContractAddress, ABI } from "contracts/Salaries";
import { address as ProxyContractAddress } from "contracts/SalariesProxy";

import useIsValidNetwork from "./useIsValidNetwork";
import { useWeb3React } from "@web3-react/core";
import { formatUnits, parseEther } from "@ethersproject/units";

export const useSalaries = () => {
  const { account } = useWeb3React();
  const { isValidNetwork } = useIsValidNetwork();

  // using proxyAddress as address, and ABI Implementation
  const SalariesContract = useContract(ProxyContractAddress, ABI);

  const fetchEmployeeSalary = async (account) => {
    const salary = await SalariesContract.salaries(account);
    return formatUnits(salary, 18);
  };

  const fetchEmployeeDate = async (account) => {
    const dates = await SalariesContract.dates(account);
    return dates;
  };

  const fetchEmployeeRemovalDate = async (account) => {
    const dates = await SalariesContract.removalDates(account);
    return dates;
  };

  const fetchTotalEmployees = async () => {
    const total = await SalariesContract.totalEmployees();
    return total;
  };

  // If token exist contract is initialized
  const fetchInitialized = async () => {
    const initialized = await SalariesContract.token();
    return !R.isNil(initialized) || !R.isEmpty(initialize);
  };

  const fetchCalculateWithdrawal = async (account) => {
    const { finalBalanceToWithdraw, monthsCount } =
      await SalariesContract.calculateWithdrawal(account);

    return {
      finalBalanceToWithdraw: formatUnits(finalBalanceToWithdraw, 18),
      monthsCount,
    };
  };

  const initialize = async (tokenAddress, liquidityProviderAddress) => {
    await SalariesContract.initialize(tokenAddress, liquidityProviderAddress);
  };

  const withdraw = async () => {
    if (account && isValidNetwork) {
      try {
        const txn = await SalariesContract.withdraw();
        await txn.wait(1);
      } catch (err) {
        console.err("withdraw.error", err);
      }
    }
  };

  useEffect(() => {
    if (account) {
    }
  }, [account]);

  return {
    fetchEmployeeSalary,
    fetchEmployeeDate,
    fetchEmployeeRemovalDate,
    fetchTotalEmployees,
    fetchCalculateWithdrawal,
    withdraw,
    initialize,
    fetchInitialized,
  };
};
