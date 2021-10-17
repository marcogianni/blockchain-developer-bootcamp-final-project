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

const EmployerPage = () => {
  const [state, setState] = useState({ totalEmployees: null });

  const { account } = useWeb3React();
  const { fetchTotalEmployees } = useSalaries();

  useEffect(async () => {
    infoNotification("Account changed");
    const total = await fetchTotalEmployees();
    setState((s) => ({ ...s, totalEmployees: total }));
    console.debug("TOTAL", total);
  }, [account]);

  return (
    <>
      <FabEmployer />
      <HeaderEmployer
        totalEmployees={state.totalEmployees}
        liquidityProviderBalance={"10,250"}
      />

      <Divider
        style={{
          marginTop: 50,
          marginBottom: 20,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: "white",
            textTransform: "uppercase",
            letterSpacing: 1,
            textAlign: "center",
          }}
          component="span"
        >
          Latest employee withdrawals
        </Typography>
      </Divider>

      <TableEmployeeWithdrawals />
    </>
  );
};

export default EmployerPage;
