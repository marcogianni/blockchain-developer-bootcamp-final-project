import { useEffect } from "react";
import * as R from "ramda";
import { useContract } from "./useContract";
import { address, ABI } from "contracts/Salaries";
import {
  address as ProxyContractAddress,
  ABI as ProxyABI,
} from "contracts/SalariesProxy";

import useIsValidNetwork from "./useIsValidNetwork";
import { useWeb3React } from "@web3-react/core";
import { formatUnits } from "@ethersproject/units";
import { successNotification } from "notifications";

import { marshalEmployeeAddedEvents } from "utils/events";

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

  const fetchAddedEmployeeHistory = async () => {
    const events = await SalariesContract.queryFilter("EmployeeAdded");
    console.debug("fetchAddedEmployeeHistory.events", {
      events,
      SalariesContract,
    });
    return marshalEmployeeAddedEvents(events);
  };

  const withdraw = async () => {
    if (account && isValidNetwork) {
      try {
        const txn = await SalariesContract.withdraw();
        await txn.wait(1);
      } catch (err) {
        console.err("withdraw.error", err);
        return { err };
      }
    }
  };

  const addNewEmployee = async (user, salary, setLoading) => {
    if (account && isValidNetwork) {
      try {
        setLoading(true);
        const txn = await SalariesContract.addEmployee(user, salary);
        await txn.wait(1);
        setLoading(false);
        successNotification("Employee successfully added");
      } catch (err) {
        setLoading(false);
        console.error("addNewEmployee.error", err);
        return { err };
      }
    }
  };

  const removeEmployee = async (user, setLoading) => {
    if (account && isValidNetwork) {
      try {
        setLoading(true);
        const txn = await SalariesContract.removeEmployee(user);
        await txn.wait(1);
        setLoading(false);
        successNotification(
          "Employee removed, wait for the employee to withdraw the last salary."
        );
      } catch (err) {
        setLoading(false);
        console.error("removeEmployee.error", err);
        return { err };
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
    addNewEmployee,
    fetchInitialized,
    removeEmployee,
    fetchAddedEmployeeHistory,
  };
};
