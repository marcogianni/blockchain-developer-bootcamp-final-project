import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatUnits } from "@ethersproject/units";

import { useSalaries } from "hooks/useSalaries";
import { useDAI } from "hooks/useDAI";

import { HeaderUser } from "components";

const UserPage = () => {
  const [salary, setSalary] = useState(0);
  const [balance, setBalance] = useState(0);
  const [calcs, setCalcs] = useState({
    finalBalanceToWithdraw: 0.0,
    monthsCount: 0,
  });

  const { account } = useWeb3React();

  const { fetchBalanceOf } = useDAI();
  const { fetchEmployeeSalary, fetchCalculateWithdrawal } = useSalaries();

  const updateBalance = async () => {
    const bal = await fetchBalanceOf(account);
    setBalance(bal);
  };

  const getUserSalary = async () => {
    const sal = await fetchEmployeeSalary(account);
    setSalary(sal);
    console.debug("UserPage.getUserSalary", sal);
  };

  const getWithDrawalCalc = async () => {
    const { finalBalanceToWithdraw, monthsCount } =
      await fetchCalculateWithdrawal(account);

    setCalcs((s) => ({ finalBalanceToWithdraw, monthsCount }));
    console.debug("getWithDrawalCalc", { finalBalanceToWithdraw, monthsCount });
  };

  useEffect(() => {
    getUserSalary();
    updateBalance();
    getWithDrawalCalc();
  }, []);

  return (
    <>
      <HeaderUser
        balance={balance}
        salary={salary}
        finalBalanceToWithdraw={calcs.finalBalanceToWithdraw}
        monthsCount={calcs.monthsCount}
      />
    </>
  );
};

export default UserPage;
