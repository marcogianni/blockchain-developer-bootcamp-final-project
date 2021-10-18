/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { useWeb3React } from "@web3-react/core";
import { infoNotification } from "notifications";
import {
  FabEmployer,
  HeaderEmployer,
  TableEmployeesWithdrawals,
  TableAddedEmployeeHistory,
} from "components";

import { useSalaries } from "hooks/useSalaries";
import { useDAI } from "hooks/useDAI";

const EmployerPage = () => {
  const [state, setState] = useState({
    totalEmployees: null,
    liquidityProviderAllowance: null,
    liquidityProviderBalance: null,
  });

  const { account } = useWeb3React();
  const { fetchTotalEmployees } = useSalaries();
  const { fetchAllowance, fetchBalanceOf } = useDAI();

  const updateTotalEmployees = async () => {
    const total = await fetchTotalEmployees();
    setState((s) => ({ ...s, totalEmployees: total }));
  };

  useEffect(async () => {
    infoNotification("Account changed");

    updateTotalEmployees();

    const liquidityProviderAllowance = await fetchAllowance();
    setState((s) => ({ ...s, liquidityProviderAllowance }));

    const liquidityProviderBalance = await fetchBalanceOf();
    setState((s) => ({ ...s, liquidityProviderBalance }));
  }, [account]);

  return (
    <>
      <FabEmployer updateTotalEmployees={updateTotalEmployees} />

      <HeaderEmployer
        totalEmployees={state.totalEmployees}
        liquidityProviderBalance={state.liquidityProviderBalance}
        liquidityProviderAllowance={state.liquidityProviderAllowance}
      />

      <TableEmployeesWithdrawals />

      <TableAddedEmployeeHistory />
    </>
  );
};

export default EmployerPage;
