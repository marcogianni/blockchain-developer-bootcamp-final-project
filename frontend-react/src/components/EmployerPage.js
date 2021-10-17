import React, { useEffect } from "react";

import Typography from "@mui/material/Typography";

import { useWeb3React } from "@web3-react/core";
import Divider from "@mui/material/Divider";
import { infoNotification } from "notifications";
import {
  FabEmployer,
  HeaderEmployer,
  TableEmployeeWithdrawals,
} from "components";

const EmployerPage = () => {
  const { account } = useWeb3React();

  useEffect(() => {
    infoNotification("Account changed");
  }, [account]);

  return (
    <>
      <FabEmployer />
      <HeaderEmployer totalEmployees={28} liquidityProviderBalance={"10,250"} />

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
