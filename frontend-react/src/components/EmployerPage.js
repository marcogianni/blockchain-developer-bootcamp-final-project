import React, { useEffect } from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useWeb3React } from "@web3-react/core";
import { infoNotification } from "notifications";

const EmployerPage = () => {
  const { account } = useWeb3React();

  useEffect(() => {
    infoNotification("Account changed");
  }, [account]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total employees</Typography>
              <Typography variant="h4">28</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Liquidity Provider Balance</Typography>
              <Typography variant="h4">10,000 DAI</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <div style={{ position: "fixed", left: 20, bottom: 20 }}>
        <Fab variant="extended" color="primary">
          <AddIcon sx={{ mr: 1 }} />
          Add Employee
        </Fab>

        <Fab variant="extended" color="secondary" style={{ marginLeft: 10 }}>
          <RemoveIcon sx={{ mr: 1 }} />
          Remove Employee
        </Fab>
      </div>
    </>
  );
};

export default EmployerPage;
