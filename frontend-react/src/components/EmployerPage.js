/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";

import { useWeb3React } from "@web3-react/core";
import Divider from "@mui/material/Divider";
import { infoNotification } from "notifications";
import {
  FabEmployer,
  HeaderEmployer,
  TableEmployeeWithdrawals,
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
  const { fetchAllowance } = useDAI();

  useEffect(async () => {
    infoNotification("Account changed");
    const total = await fetchTotalEmployees();
    setState((s) => ({ ...s, totalEmployees: total }));

    const liquidityProviderAllowance = await fetchAllowance();
    setState((s) => ({ ...s, liquidityProviderAllowance }));
    console.debug("allowance", liquidityProviderAllowance);

    const liquidityProviderBalance = await fetchAllowance();
    setState((s) => ({ ...s, liquidityProviderBalance }));
    console.debug("liquidityProviderBalance", liquidityProviderBalance);
  }, []);

  return (
    <>
      <FabEmployer />
      <HeaderEmployer
        totalEmployees={state.totalEmployees}
        liquidityProviderBalance={state.liquidityProviderBalance}
        liquidityProviderAllowance={state.liquidityProviderAllowance}
      />

      <Typography
        variant="h4"
        style={{
          color: "white",
          textTransform: "uppercase",
          letterSpacing: 1,
          textAlign: "left",
          marginTop: 50,
          marginBottom: 20,
          display: "block",
          fontWeight: "bold",
          fontSize: 25,
        }}
        component="span"
      >
        Latest employee withdrawals
      </Typography>

      <TableEmployeeWithdrawals />
    </>
  );
};

export default EmployerPage;
