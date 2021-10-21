import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatUnits } from "@ethersproject/units";

import { useSalaries } from "hooks/useSalaries";
import { useDAI } from "hooks/useDAI";

import { HeaderUser } from "components";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

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
  };

  const getWithDrawalCalc = async () => {
    const { finalBalanceToWithdraw, monthsCount } =
      await fetchCalculateWithdrawal(account);

    setCalcs({ finalBalanceToWithdraw, monthsCount });
  };

  useEffect(() => {
    getUserSalary();
    updateBalance();
    getWithDrawalCalc();
  }, [account]);

  if (salary == 0.0) {
    return (
      <Alert severity="warning" variant="filled" style={{ fontSize: 25 }}>
        <AlertTitle>Error</AlertTitle>
        You do not appear to be an employee of this company, you are not
        authorized to view.
      </Alert>
    );
  }

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
